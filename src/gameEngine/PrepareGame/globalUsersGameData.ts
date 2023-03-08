import PreparatoryMethods from './PreparatoryMethods';

const { MIN_BUNKER_AREA, MAX_BUNKER_AREA } = process.env;

const globalUsersGameData = async () => {
	const bunker_data = {
		square: bunkerAreaRandomizer(),
		skill_1: await PreparatoryMethods.bunker_data.random(),
		skill_2: await PreparatoryMethods.bunker_data.random(),
		skill_3: await PreparatoryMethods.bunker_data.random(),
		skill_4: await PreparatoryMethods.bunker_data.random(),
	};

	console.log(bunker_data);

	return bunker_data;
};

const bunkerAreaRandomizer = () => {
	const minArea = Number(MIN_BUNKER_AREA) || 100;
	const maxArea = Number(MAX_BUNKER_AREA) - minArea;

	return minArea + Math.round(Math.random() * maxArea);
};

export default globalUsersGameData;
