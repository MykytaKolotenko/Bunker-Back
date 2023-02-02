import ICard from '../card';
import IUser from '../card/IUser';

interface IRoom {
	room_name: string;
	room_id: string;
	players: Array<IUser | ICard>;
}

export default IRoom;
