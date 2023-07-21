import { v4 } from 'uuid';
import IRoom from '../../../interfaces/rooms/IRoom';
import IUser from '../../../interfaces/user/IUser';
import ICard from '../../../interfaces/card';
import prepareCards from '../../../gameEngine/PrepareGame/prepareGame';

export default class RoomHandler implements IRoom {
	room_name: string;
	room_owner: string;
	room_id: string;
	players: Array<IUser> = [];
	end_game_players: number;

	static maxPlayers: number = Number(process.env.MAX_PLAYERS) || 16;
	static minPlayers = 8;

	constructor(room_name: string, id: string) {
		this.room_name = room_name;
		this.room_owner = id;
		this.room_id = v4();
		this.end_game_players = 4;

		this.addPlayer(id);
	}

	addPlayer(id: string): void {
		// data from DB
		const userData: IUser = {
			id: 'dasdasd',
			name: 'Nikita',
			ready: false,
			language: 'ua',
		};

		const playerExists = this.players.some(
			(player: any) => player.user_id === userData.id,
		);

		if (!playerExists) {
			this.players.push(userData);
		}
	}

	getPlayers() {
		return this.players;
	}

	// chekers
	endGameCount(): number {
		const endUsersCount = this.players.length / 2;

		if (endUsersCount <= RoomHandler.minPlayers / 2) {
			throw new Error('need more players or wait another player to ready');
		}

		return (this.end_game_players = endUsersCount);
	}

	deletePlayer(PlayerId: string): boolean {
		const playersFiltered = this.players.filter(({ id }) => id !== PlayerId);

		if (playersFiltered.length === this.players.length) {
			return false;
		}

		this.players = playersFiltered;

		return true;
	}

	async startGame(): Promise<void> {
		try {
			const preparedCards = await prepareCards(this.players);

			this.players = preparedCards;
		} catch (error) {
			console.error('Error preparing cards:', error);
		}
	}
}
