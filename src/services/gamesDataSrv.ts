import IRoom from '../interfaces/rooms/IRoom';

class ActiveGames {
	active_games: Array<IRoom>;

	constructor() {
		this.active_games = [];
	}

	addGame(newRoom: IRoom): Array<IRoom> {
		const oldData = [...this.active_games];
		this.active_games.push(newRoom);

		if (oldData.length === this.active_games.length) {
			throw Error("Can't add data to active games");
		}

		return this.active_games;
	}

	deleteGame(id: String): Array<IRoom> {
		const oldData = [...this.active_games];
		this.active_games.filter((item: IRoom) => item.room_id !== id);

		if (oldData.length === this.active_games.length) {
			throw Error("Can't delete data from active games");
		}

		return this.active_games;
	}
}

const activeGames = new ActiveGames();
