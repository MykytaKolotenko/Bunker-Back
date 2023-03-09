import IBunker from '../../interfaces/card/IBunker';
import PreparatoryMethods from './PreparatoryMethods';

interface ISkill {
	id: string;
	bunker_data: string;
}

interface IBunkerCheker {
	square: number;
	skill_1: ISkill;
	skill_2: ISkill;
	skill_3: ISkill;
	skill_4: ISkill;
}

const { MIN_BUNKER_AREA, MAX_BUNKER_AREA } = process.env;

const globalUsersGameData = async () => {
	try {
		let data: IBunkerCheker = await getData();

		data = await bunkerSkillUniqueData(data);

		return data;
	} catch (error) {
		  console.log((error as Error).message);
	}
};

const getData = async (): Promise<IBunkerCheker> => ({
	square: bunkerAreaRandomizer(),
	skill_1: await PreparatoryMethods.bunker_data.random(),
	skill_2: await PreparatoryMethods.bunker_data.random(),
	skill_3: await PreparatoryMethods.bunker_data.random(),
	skill_4: await PreparatoryMethods.bunker_data.random(),
});

const bunkerSkillUniqueData = async (
	object: IBunkerCheker,
): Promise<IBunkerCheker> => {
	let data = object;

	const bunkerKeysWithoutSquare: Array<string> = Object.keys(data).filter(
		(item) => item !== 'square',
	);

	const uniqueId: Array<any> = [];
	bunkerKeysWithoutSquare.forEach((element: string) => {
		if (
			element === `skill_1` ||
			element === `skill_2` ||
			element === `skill_3` ||
			element === `skill_4`
		) {
			if (!uniqueId.includes(data[element].id)) {
				uniqueId.push(data[element].id);
			}
		}
	});

	if (bunkerKeysWithoutSquare.length === uniqueId.length) {
		return data;
	}

	data = await getData();
	return bunkerSkillUniqueData(data);
};

const bunkerAreaRandomizer = () => {
	const minArea = Number(MIN_BUNKER_AREA) || 100;
	const maxArea = Number(MAX_BUNKER_AREA) - minArea;

	return minArea + Math.round(Math.random() * maxArea);
};

export default globalUsersGameData;
