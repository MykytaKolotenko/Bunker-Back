import PreparatoryMethods from './PreparatoryMethods';

const individualGameData = async () => {
	const user_card = {
		proffesion: {
			item: await PreparatoryMethods.proffesion.random(),
			visible: false,
		},
		additional_info: {
			item: await PreparatoryMethods.additional_info.random(),
			visible: false,
		},
		baggage: {
			item: await PreparatoryMethods.baggage.random(),
			visible: false,
		},
		skill_1: {
			item: await PreparatoryMethods.additional_card.random(),
			visible: false,
		},
		skill_2: {
			item: await PreparatoryMethods.additional_card.random(),
			visible: false,
		},
		character: {
			item: await PreparatoryMethods.character_info.random(),
			visible: false,
		},
		health: {
			item: await PreparatoryMethods.health.random(),
			visible: false,
		},
		hobbies: {
			item: await PreparatoryMethods.hobbies.random(),
			visible: false,
		},
		phobia: {
			item: await PreparatoryMethods.phobia.random(),
			visible: false,
		},
		weigth: {
			item: await PreparatoryMethods.weight_data.random(),
			visible: false,
		},
		gender: {
			item: 'male or female',
			visible: false,
		},
		age: {
			item: 'age',
			visible: false,
		},
		friend: {
			friend_enemy: null,
			visible: false,
		},
	};

	return user_card;
};

export default individualGameData;
