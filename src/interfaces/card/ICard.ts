import IBunker from './IBunker';
import IGameData from './IGameData';
import IUser from '../user/IUser';

interface ICard {
	disaster: string | null;
	bunker_data: IBunker | null;
	user_card: IGameData;
}

export default ICard;
