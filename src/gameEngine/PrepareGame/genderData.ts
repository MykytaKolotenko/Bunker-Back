import randomizer from '../../helpers/randomizer';

const { GENDER_PERCENT_DIFFERENCE } = process.env;

const genderPercentDifference = Number(GENDER_PERCENT_DIFFERENCE) || 0.6;

interface GenderObject {
	[key: string]: number;
}

const male: string = 'male';
const female: string = 'female';

const genderData = (playersCount: number): Array<string> => {
	let data = [];

	do {
		if (data.length >= 1) {
		}

		if (randomizer(1) >= 0.5) {
			data.push(male);
		} else {
			data.push(female);
		}
	} while (data.length !== playersCount);

	genderChecker(data, playersCount);

	return data;
};

const genderChecker = (
	arr: Array<string>,
	playersCount: number,
): GenderObject => {
	const genderObject: GenderObject = { male: 0, female: 0 };

	arr.forEach((item: string) => genderObject[item]++);

	const percent = genderObject.male / genderObject.female;
	const minPercentDif: number = genderPercentDifference - 0.01;
	const maxPercentDif: number = 1.1 + genderPercentDifference;

	if (minPercentDif >= percent || maxPercentDif <= percent) {
		genderData(playersCount);
	}

	return genderObject;
};

export default genderData;
