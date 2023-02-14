import { v4 } from 'uuid';

import IRoom from '../interfaces/rooms/IRoom';
import IUser from '../interfaces/user/IUser';

export default class RoomLogic {
	game_data: IRoom;

	static maxPlayers: number = Number(process.env.MAX_PLAYERS) || 16;
	static minPlayers = 8;

	constructor(name: string, id: string) {
		this.game_data = {
			room_name: name,
			room_id: v4(),
			players: [],
			end_game_players: 4,
		};

		this.addPlayer(id);
	}

	addPlayer(playerId: string): boolean {
		// Find user data from Db by id
		const { players } = this.game_data;

		const user: IUser = {
			id: 'kjhfskfhskdf',
			name: 'Nikita',
			avatar: 'null',
			ready: false,
		};

		const arrayLength = players.push(user);

		if (arrayLength === players.length) {
			return false;
		}

		return true;
	}

	// chekers
	endGameCount(): number {
		const { players } = this.game_data;

		const endUsersCount = players.length / 2;

		if (endUsersCount <= RoomLogic.minPlayers / 2) {
			throw new Error('need more players or wait another player to ready');
		}

		return (this.game_data.end_game_players = endUsersCount);
	}

	deletePlayer(PlayerId: string): boolean {
		const { players } = this.game_data;
		const playersFiltered = players.filter(({ id }) => id !== PlayerId);

		if (playersFiltered.length === players.length) {
			return false;
		}

		return true;
	}

	// reconnect(PlayerId: string): boolean {
	// 	// Reconnect user
	// 	return true;
	// }
}
