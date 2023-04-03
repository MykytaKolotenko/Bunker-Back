import PreparatoryMethods from '../TableMethods/PreparatoryMethods';
import IUser from '../../interfaces/user/IUser';
import genderData from './genderData';
import { log } from 'console';

interface IArrayDataItem {
	item: Array<string>;
	visible: boolean;
}
interface IArrayData {
	proffesion: IArrayDataItem;
	additional_info: IArrayDataItem;
	baggage: IArrayDataItem;
	skill_1: IArrayDataItem;
	skill_2: IArrayDataItem;
	character: IArrayDataItem;
	health: IArrayDataItem;
	phobia: IArrayDataItem;
	weight: IArrayDataItem;
	gender: IArrayDataItem;
	hobbies: IArrayDataItem;
	age: IArrayDataItem;
	friend: IArrayDataItem;
}

const setUniquePlayerItemFromDb = async (
	poleName: string,
	playersCount: number,
): Promise<Array<string>> => {
	if (
		poleName === 'proffesion' ||
		poleName === 'additional_info' ||
		poleName === 'baggage' ||
		poleName === 'skill' ||
		poleName === 'character' ||
		poleName === 'health' ||
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

	return [];
};

const setIndividualGameData = async (playerCount: number) => {
	const user_card: IArrayData = {
		proffesion: {
			item: await setUniquePlayerItemFromDb('proffesion', playerCount),
			visible: false,
		},
		additional_info: {
			item: await setUniquePlayerItemFromDb('additional_info', playerCount),
			visible: false,
		},
		baggage: {
			item: await setUniquePlayerItemFromDb('baggage', playerCount),
			visible: false,
		},
		skill_1: {
			item: await setUniquePlayerItemFromDb('skill', playerCount),
			visible: false,
		},
		skill_2: {
			item: await setUniquePlayerItemFromDb('skill', playerCount),
			visible: false,
		},
		character: {
			item: await setUniquePlayerItemFromDb('character', playerCount),
			visible: false,
		},
		health: {
			item: await setUniquePlayerItemFromDb('health', playerCount),
			visible: false,
		},
		hobbies: {
			item: await setUniquePlayerItemFromDb('hobbies', playerCount),
			visible: false,
		},
		phobia: {
			item: await setUniquePlayerItemFromDb('phobia', playerCount),
			visible: false,
		},
		weight: {
			item: await setUniquePlayerItemFromDb('weight', playerCount),
			visible: false,
		},
		gender: {
			item: genderData(playerCount),
			visible: false,
		},
		age: {
			item: ['12', '45'],
			visible: false,
		},
		friend: {
			item: ['null', 'null'],
			visible: false,
		},
	};

	return user_card;
};

const readyIndividualGameData = async (players: Array<IUser>) => {
	const playersNumber = players.length;

	return await setIndividualGameData(playersNumber);
};

export default readyIndividualGameData;
