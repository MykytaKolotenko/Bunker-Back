import ICard from '../../interfaces/card';
import IUser from '../../interfaces/user/IUser';
import globalUsersGameData from './globalUsersGameData';
import individualGameData from './individualGameData';
import PreparatoryMethods from './PreparatoryMethods';

export default async function PrepareCards(players: Array<IUser>) {
	const bunker_data = await globalUsersGameData();
	const disaster = await PreparatoryMethods.global_event.random();

	const asyncData = players.map(async (userData) => ({
		...userData,
		game_card: {
			bunker_data,
			disaster,
			user_card: await individualGameData(),
		},
	}));

	const data = await Promise.all(asyncData);

	return data;
}
