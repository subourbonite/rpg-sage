import { sortAscending } from "../ArrayUtils/Sort";
import type { ISearchable } from "./types";

type TCategorizedSearchables<T extends ISearchable> = {
	children: TCategorizedSearchables<T>[];
	label: string;
	searchables: T[];
};

function partitionCategorizedSearchables<T extends ISearchable>(searchables: T[], categoryParser: (searchable: T) => string): TCategorizedSearchables<T>[] {
	const categorized = searchables.reduce((array, searchable) => {
		const searchableCategory = categoryParser(searchable);
		let category = array.find(cat => cat.label === searchableCategory);
		if (!category) {
			category = { label:searchableCategory, searchables:[], children:[] };
			array.push(category);
		}
		category.searchables.push(searchable);
		return array;
	}, <TCategorizedSearchables<T>[]>[]);
	categorized.forEach(category => {
		category.searchables.sort(sortByName);
		return category.searchables;
	});
	return categorized;
}

function sortByLabel<T extends ISearchable>(a: TCategorizedSearchables<T>, b: TCategorizedSearchables<T>): number {
	return sortAscending(a.label, b.label);
}

function sortByName<T extends ISearchable>(a: T, b: T): number {
	return sortAscending(a.name, b.name);
}

function sortByCountThenLabel<T extends ISearchable>(a: TCategorizedSearchables<T>, b: TCategorizedSearchables<T>): number {
	return sortAscending(b.searchables.length, a.searchables.length) || sortAscending(a.label, b.label);
}

export default class HasCategorizedSearchables<T extends ISearchable> {

	protected _unsortedSearchables: T[] = [];

	// #region properties

	private _categories: string[] | null = null;
	public get categories(): string[] {
		return this._categories ?? (this._categories = this.categorizedSearchables.map(cat => cat.label));
	}

	private _categorizedSearchables: TCategorizedSearchables<T>[] | null = null;
	public get categorizedSearchables(): TCategorizedSearchables<T>[] {
		if (!this._categorizedSearchables) {
			this._categorizedSearchables = partitionCategorizedSearchables(this._unsortedSearchables, searchable => searchable.searchResultCategory);
			this._categorizedSearchables.sort(sortByCountThenLabel);
			this._categorizedSearchables.forEach(category => {
				category.children = partitionCategorizedSearchables(category.searchables, searchable => searchable.name[0]);
				category.children.sort(sortByLabel);
			});
		}
		return this._categorizedSearchables;
	}

	public get categoryCount() {
		return this.categories.length;
	}

	public get isEmpty() {
		return !this._unsortedSearchables.length;
	}

	private _searchables: T[] | null = null;
	public get searchables(): T[] {
		return this._searchables ?? (this._searchables = this.categorizedSearchables.reduce((array, category) => array.concat(category.searchables), <T[]>[]));
	}

	public get searchableCount(): number {
		return this._unsortedSearchables.length;
	}

	public get theOne(): T | null {
		return this._unsortedSearchables.length === 1 ? this._unsortedSearchables[0] : null;
	}

	// #endregion

	// #region methods

	public add(...searchables: T[]) {
		this._unsortedSearchables.push(...searchables);
		this._searchables = null;
		this._categorizedSearchables = null;
		this._categories = null;
	}

	// #endregion
}
