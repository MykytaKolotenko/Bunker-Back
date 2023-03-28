import randomizer from '../../helpers/randomizer';

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

	genderChecker(data);
	return data;
};

const genderChecker = (arr: Array<string>): GenderObject => {
	const genderObject: GenderObject = { male: 0, female: 0 };

	arr.forEach((item: string) => genderObject[item]++);
	console.log(arr);

	console.log(genderObject);

	return genderObject;
};

export default genderData;
