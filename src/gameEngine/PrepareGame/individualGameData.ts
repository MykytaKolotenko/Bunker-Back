import PreparatoryMethods from './PreparatoryMethods';
import IUser from '../../interfaces/user/IUser';

const readyIndividualGameData = async (players: Array<IUser>) => {
	const playersNumber = players.length;

	const userCardsData = {
		proffesion: {
			item: await setUniquePlayerDataFromDb('proffesion', playersNumber),
			visible: false,
		},
	};

	// const asyncData = players.map(async (_, index) => ({
	// 	user_card: await setIndividualGameData(),
	// }));
};

const setUniquePlayerDataFromDb = async (
	poleName: string,
	playersCount: number,
): Promise<string[] | Error> => {
	if (
		poleName === 'proffesion' ||
		poleName === 'additional_info' ||
		poleName === 'baggage' ||
		poleName === 'skill' ||
		poleName === 'character' ||
		poleName === 'health' ||
		poleName === 'hobbies' ||
		poleName === 'hobbies' ||
		poleName === 'phobia' ||
		poleName === 'weight'
	) {
		const uniqueId: Array<number> = [];
		const uniqueData: Array<string> = [];

		do {
			const fetchData = await PreparatoryMethods[poleName].random();

			if (!uniqueId.includes(fetchData.id)) {
				uniqueId.push(fetchData.id);
				uniqueData.push(fetchData[poleName]);
			}
		} while (uniqueId.length !== playersCount);

		return uniqueData;
	}

	return new Error('Not correct row data');
};

const setIndividualGameData = async (playerCount: number) => {
	const user_card = {
		proffesion: {
			item: await setUniquePlayerDataFromDb('proffesion', playerCount),
		},
		additional_info: {
			item: await PreparatoryMethods.additional_info.random(),
		},
		baggage: {
			item: await PreparatoryMethods.baggage.random(),
		},
		skill_1: {
			item: await PreparatoryMethods.skill.random(),
		},
		skill_2: {
			item: await PreparatoryMethods.skill.random(),
		},
		character: {
			item: await PreparatoryMethods.character.random(),
		},
		health: {
			item: await PreparatoryMethods.health.random(),
		},
		hobbies: {
			item: await PreparatoryMethods.hobbies.random(),
		},
		phobia: {
			item: await PreparatoryMethods.phobia.random(),
		},
		weigth: {
			item: await PreparatoryMethods.weight.random(),
		},
		gender: {
			item: 'male or female',
		},
		age: {
			item: 'age',
		},
		friend: {
			friend_enemy: null,
		},
	};

	return user_card;
};

export default readyIndividualGameData;
