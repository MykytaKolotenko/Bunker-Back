import IUser from '../../interfaces/user/IUser';
import globalUsersGameData from './globalUsersGameData';
import readyIndividualGameData from './individualGameData';
import individualGameData from './individualGameData';
import PreparatoryMethods from './PreparatoryMethods';

export default async function PrepareCards(players: Array<IUser>) {
	const bunker_data = await globalUsersGameData();
	const disaster = await PreparatoryMethods.global_event.random();
	const user_card = await readyIndividualGameData(players);

	const asyncData = players.map(async (userData) => ({
		...userData,
		game_card: {
			bunker_data,
			disaster,
			user_card,
		},
	}));

	return asyncData;
}
