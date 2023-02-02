import IBunker from './IBunker';
import IGameData from './IGameData';
import IUser from './IUser';

interface ICard {
    user: IUser;
    language: string;
    disaster: string;
    bunker_data: IBunker
    game_data: IGameData
}

export default ICard