import randomizer from '../helpers/randomizer';
import ICard from '../interfaces/card';
import GameCardRow from './MethodCreater/GameCardRow';

export default class PrepareGame {
	// [key: string]: any;

	constructor(players: Array<ICard>) {
		this.startGame(players);
	}
	// ICard
	async startGame(players: Array<ICard>): Promise<any> {
		const gameObject = players.map((item) => ({
			...item,
			language: 'Ua',
			disaster: null,
			bunker_data: {
				square: 24,
				skill_1: null,
				skill_2: null,
				skill_3: null,
				skill_4: null,
			},
			game_data: {
				proffesion: {
					item: null,
					visible: false,
				},
				additional_info: {
					item: null,
					visible: false,
				},
				baggage: {
					item: null,
					visible: false,
				},
				skill_1: {
					item: null,
					visible: false,
				},
				skill_2: {
					item: null,
					visible: false,
				},
				character: {
					item: null,
					visible: false,
				},
				health: {
					item: null,
					visible: false,
				},
				hobbies: {
					item: null,
					visible: false,
				},
				phobia: {
					item: null,
					visible: false,
				},
				weigth: {
					item: null,
					visible: false,
				},
				gender: {
					item: null,
					visible: false,
				},
				age: {
					item: null,
					visible: false,
				},
				friend: {
					friend_enemy: null,
					visible: false,
				},
			},
		}));

		this.setGameData(gameObject);

		return gameObject;
	}

	async setGameData(players: Array<ICard>): Promise<Array<ICard>> {
		const { global_event } = await GameCardRow.global_event.random();

		const uniqueData = await this.uniqueData(players);
		console.log(uniqueData);

		players.map(() => {});

		return players;
	}

	async uniqueData(players: Array<ICard>): Promise<Object> {
		const playersLenth = players.length;
		const allUniqueData = players[0];
		let keys: Array<string> | Error;

		if (typeof allUniqueData.game_data === 'undefined') {
			keys = new Error('NO keys in game_data');
		} else if (typeof allUniqueData.game_data === 'object') {
			keys = Object.keys(allUniqueData.game_data);
		}

		let playerCards: any;
		let bunker_data: { [key: string]: string } = {}; // initialize the variable

		const bunkerDataLength = await GameCardRow.bunker_data.dataLength();

		for (let i = 1; i <= 4; i++) {
			const randomId = randomizer(bunkerDataLength);
			bunker_data[`s` + i] = `${i}`; // set numeric keys as strings
		}

		// const bunker_data: Partial<IUniqueData> = {
		// 	bunker_data: {
		// 		s1: '1',
		// 		s2: '1',
		// 		s3: '1',
		// 		s4: '1',
		// 	},
		// };

		const game_data: IGame_data = {
			proffesion: ['1', '2'],
			additional_info: ['1', '2'],
			baggage: ['1', '2'],
			skill_1: ['1', '2'],
			skill_2: ['1', '2'],
			character: ['1', '2'],
			health: ['1', '2'],
			hobbies: ['1', '2'],
			phobia: ['1', '2'],
			weigth: ['1', '2'],
			gender: ['1', '2'],
			age: ['1', '2'],
		};

		// playerCards = { ...bunker_data, ...game_data } as IUniqueData;

		return playerCards;
	}
}

interface IBunker_data {
	s1: string;
	s2: string;
	s3: string;
	s4: string;
}

interface IGame_data {
	proffesion: Array<string>;
	additional_info: Array<string>;
	baggage: Array<string>;
	skill_1: Array<string>;
	skill_2: Array<string>;
	character: Array<string>;
	health: Array<string>;
	hobbies: Array<string>;
	phobia: Array<string>;
	weigth: Array<string>;
	gender: Array<string>;
	age: Array<string>;
}

interface IUniqueData extends IGame_data {
	bunker_data: IBunker_data;
}
