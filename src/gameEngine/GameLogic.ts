import IRoom from '../interfaces/rooms/IRoom';

class GameLogic {
	gameRoom: IRoom;

	constructor(gameRoom: IRoom) {
		this.gameRoom = gameRoom;
	}

	openParamater(id: string, type: string) {
		// Open one parameter if have adiitiobal game card or on his move
	}

	addCardsToUsers() {
		// Add game card to all users
	}

	changeParameter(id: string, type: string) {
		// Change one parameter if have additional card
	}

	allChangeParameter(type: string) {
		// Change all parameters if have additional card
	}
}
