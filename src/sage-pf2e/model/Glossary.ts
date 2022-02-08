import type utils from "../../sage-utils";
import type { SourcedCore } from "./base/HasSource";
import HasSource from './base/HasSource';

export interface GlossaryCore extends SourcedCore<"Glossary"> {
	abbrev: string;
}

export default class Glossary extends HasSource<GlossaryCore> {

	public get abbrev(): string { return this.core.abbrev || ""; }

	//#region utils.SearchUtils.ISearchable

	public search(searchInfo: utils.SearchUtils.SearchInfo): utils.SearchUtils.SearchScore<this> {
		const score = super.search(searchInfo);
		if (searchInfo.globalFlag) {
			score.append(searchInfo.score(this, this.abbrev));
		}
		return score;
	}

	//#endregion

	//#region static

	/** Represents the plural form of the objectType */
	public static get plural(): string {
		return this.singular;
	}

	//#endregion
}
