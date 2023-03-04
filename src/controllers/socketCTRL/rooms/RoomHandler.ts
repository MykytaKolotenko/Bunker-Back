import { v4 } from 'uuid';
import PrepareGame from '../../../gameEngine/PrepareGame';
import IRoom from '../../../interfaces/rooms/IRoom';
import IUser from '../../../interfaces/user/IUser';

export default class RoomHandler {
	room_data: IRoom;

	static maxPlayers: number = Number(process.env.MAX_PLAYERS) || 16;
	static minPlayers = 8;

	constructor(room_name: string, id: string) {
		this.room_data = {
			room_name,
			room_owner: id,
			room_id: v4(),
			players: [],
			end_game_players: 4,
		};

		this.addPlayer(id);
	}

	addPlayer(playerId: string): boolean {
		// Find user data from Db by id
		const { players } = this.room_data;

		const user: IUser = {
			id: 'kjhfskfhskdf',
			name: 'Nikita',
			ready: false,
		};

		const arrayLength = players.push(user);

		if (arrayLength === players.length) {
			return false;
		}

		return true;
	}

	get players() {
		return this.room_data.players;
	}

	// chekers
	endGameCount(): number {
		const { players } = this.room_data;

		const endUsersCount = players.length / 2;

		if (endUsersCount <= RoomHandler.minPlayers / 2) {
			throw new Error('need more players or wait another player to ready');
		}

		return (this.room_data.end_game_players = endUsersCount);
	}

	deletePlayer(PlayerId: string): boolean {
		const { players } = this.room_data;

		const playersFiltered = players.filter(({ id }) => id !== PlayerId);

		if (playersFiltered.length === players.length) {
			return false;
		}

		this.room_data.players = playersFiltered;

		return true;
	}

	async startGame() {
		return new PrepareGame(this.room_data.players);
	}
}
