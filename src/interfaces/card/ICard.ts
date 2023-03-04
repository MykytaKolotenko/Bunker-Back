import IBunker from './IBunker';
import IGameData from './IGameData';
import IUser from '../user/IUser';

interface ICard extends IUser {
	language?: string;
	disaster?: string | null;
	bunker_data?: IBunker | null;
	game_data?: IGameData;
}

export default ICard;
