import ICard from '../card';

interface IUser {
	id: string;
	name: string;
	ready: boolean;
	language: string;
	game_card?: ICard;
}

export default IUser;
