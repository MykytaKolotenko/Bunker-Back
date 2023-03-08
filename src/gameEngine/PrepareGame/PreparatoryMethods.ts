import TableRowMethods, {
	IGameRowMethods,
} from '../TableMethods/TableRowMethods';

class AddPrepareMethods {
	weight_data: IGameRowMethods;
	proffesion: IGameRowMethods;
	additional_info: IGameRowMethods;
	baggage: IGameRowMethods;
	bunker_data: IGameRowMethods;
	additional_card: IGameRowMethods;
	character_info: IGameRowMethods;
	global_event: IGameRowMethods;
	health: IGameRowMethods;
	hobbies: IGameRowMethods;
	phobia: IGameRowMethods;

	constructor() {
		this.weight_data = new TableRowMethods('weight_data');
		this.proffesion = new TableRowMethods('proffesion');
		this.additional_info = new TableRowMethods('additional_info');
		this.baggage = new TableRowMethods('baggage');
		this.bunker_data = new TableRowMethods('bunker_data');
		this.additional_card = new TableRowMethods('additional_card');
		this.character_info = new TableRowMethods('character_info');
		this.global_event = new TableRowMethods('global_event');
		this.health = new TableRowMethods('health');
		this.hobbies = new TableRowMethods('hobbies');
		this.phobia = new TableRowMethods('phobia');
	}
}

export default new AddPrepareMethods();
