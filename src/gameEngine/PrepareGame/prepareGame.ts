import IUser from '../../interfaces/user/IUser';
import globalUsersGameData from './globalUsersGameData';
import readyIndividualGameData from './individualGameData';
import PreparatoryMethods from '../TableMethods/PreparatoryMethods';

export default async function PrepareCards(
	players: Array<IUser>,
): Promise<any> {
	try {
		const bunker_data = await globalUsersGameData();
		const disaster = await PreparatoryMethods.global_event.random();
		const {
			proffesion,
			additional_info,
			baggage,
			skill_1,
			skill_2,
			character,
			health,
			hobbies,
			phobia,
			weight,
			gender,
			age,
			friend,
		} = await readyIndividualGameData(players);

		return players.map((userData, index: number) => ({
			...userData,
			game_card: {
				bunker_data,
				disaster,
				user_card: {
					proffesion: {
						item: proffesion.item[index],
						visible: proffesion.visible,
					},
					additional_info: {
						item: additional_info.item[index],
						visible: additional_info.visible,
					},
					baggage: {
						item: baggage.item[index],
						visible: baggage.visible,
					},
					skill_1: {
						item: skill_1.item[index],
						visible: skill_1.visible,
					},
					skill_2: {
						item: skill_2.item[index],
						visible: skill_2.visible,
					},
					character: {
						item: character.item[index],
						visible: character.visible,
					},
					health: {
						item: health.item[index],
						visible: health.visible,
					},
					hobbies: {
						item: hobbies.item[index],
						visible: hobbies.visible,
					},
					phobia: {
						item: phobia.item[index],
						visible: phobia.visible,
					},
					weight: {
						item: weight.item[index],
						visible: weight.visible,
					},
					gender: {
						item: gender.item[index],
						visible: gender.visible,
					},
					age: {
						item: age.item[index],
						visible: age.visible,
					},
					friend: {
						item: friend.item[index] || null,
						visible: friend.visible,
					},
				},
			},
		}));
	} catch (error) {
		console.error('Error preparing cards:', error);
		throw error; // проброс ошибки дальше
	}
}
