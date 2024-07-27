import { GameCharacter } from "../../../model/GameCharacter.js";
import type { SageCommand } from "../../../model/SageCommand.js";

/** Finds the Game Master NPC, using the saved name or the default name, creating one if not found and the user is a GameMaster. */
export async function findGm(sageCommand: SageCommand): Promise<GameCharacter | undefined> {
	if (sageCommand.game) {
		return sageCommand.isGameMaster
			? sageCommand.game.gmCharacter
			: undefined;
	}
	return sageCommand.server.gmCharacter;
}