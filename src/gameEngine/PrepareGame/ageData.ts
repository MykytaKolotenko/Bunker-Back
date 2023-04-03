const { MIN_AGE, MAX_AGE, AVERAGE_AGE } = process.env;
const averageAge = Number(AVERAGE_AGE) || 40;
const minAge = Number(MIN_AGE) || 18;
const maxAge = Number(MAX_AGE) || 80;

export default function ageData(playersNumber: number): Array<number> {
	let ages: Array<number> = [];

	for (let i = 0; i < playersNumber; i++) {
		const randomAge = Math.round(minAge + Math.random() * (maxAge - minAge));

		ages.push(randomAge);
	}

	const sumOfAges = ages.reduce((acc, item) => acc + item, 0);
	const middleAge = sumOfAges / playersNumber;

	if (averageAge <= middleAge) {
		ages = ageData(playersNumber);
	}

	return ages;
}
