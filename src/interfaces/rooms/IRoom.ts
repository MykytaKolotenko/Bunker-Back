import ICard from '../card';
import IUser from '../user/IUser';

interface IRoom {
	room_name: string;
	room_id: string;
	players: Array<IUser | ICard>;
	end_game_players: Number;
}

export default IRoom;
