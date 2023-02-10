import { v4 } from 'uuid';
import IUser from '../interfaces/card/IUser';

class RoomLogic {
	roomName: string;
	roomId: string;
	players: Array<IUser>;

	constructor(name: string) {
		this.roomName = name;
		this.roomId = v4();
		this.players = [];
	}

	addPlayer(playerId: string): boolean {
		// Check id and add user
		return true;
	}

	deletePlayer(PlayerId: string): boolean {
		// Delete user by id
		return true;
	}

	reconnect(PlayerId: string): boolean {
		// Reconnect user
		return true;
	}
}
