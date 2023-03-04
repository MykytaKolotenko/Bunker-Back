import IRoom from '../interfaces/rooms/IRoom';

class Game {
	constructor(gameRoom: IRoom) {
		this.startGame(gameRoom);
	}

	openParamater(id: string, type: string) {
		// Open one parameter if have adiitiobal game card or on his move
	}

	startGame(data: IRoom) {}

	changeParameter(id: string, type: string) {
		// Change one parameter if have additional card
	}

	stealPlayerParameter(id: string, type: string) {
		// steal parameter from another player
	}

	healPlayer(id: string) {
		// heal some player
	}

	allChangeParameter(type: string) {
		// Change all parameters if have additional card
	}

	additionalBunkersAround(describe: string) {
		// add neighbour bunkers
	}

	additionalBunkerData(describe: string) {
		// add bunker data
	}

	activePlayerCard(id: string) {
		// Active additional card to another player
	}

	allNoProfession() {
		// Delete all professions
	}

	changeProffesionNextPlayer() {}

	addAdditionalPlaceToBunker() {
		// more place in bunker
	}

	deleteSkillCard(id: string, card: number) {
		// 2 game cards, must be switch:case
		// Additional game card must be a null
	}
}
