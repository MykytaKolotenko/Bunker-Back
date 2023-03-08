import ICard from '../card';
import IUser from '../user/IUser';

interface IRoom {
	room_name: string;
	room_owner: string;
	room_id: string;
	players: Array<IUser>;
	end_game_players: Number;
}

export default IRoom;
