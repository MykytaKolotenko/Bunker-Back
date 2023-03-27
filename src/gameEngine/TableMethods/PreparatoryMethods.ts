import TableRowMethods, { IGameRowMethods } from './TableRowMethods';

class PreparatoryMethods {
	weight: IGameRowMethods;
	proffesion: IGameRowMethods;
	additional_info: IGameRowMethods;
	baggage: IGameRowMethods;
	bunker_data: IGameRowMethods;
	skill: IGameRowMethods;
	character: IGameRowMethods;
	global_event: IGameRowMethods;
	health: IGameRowMethods;
	hobbies: IGameRowMethods;
	phobia: IGameRowMethods;

	constructor() {
		this.weight = new TableRowMethods('weight_data');
		this.proffesion = new TableRowMethods('proffesion');
		this.additional_info = new TableRowMethods('additional_info');
		this.baggage = new TableRowMethods('baggage');
		this.bunker_data = new TableRowMethods('bunker_data');
		this.skill = new TableRowMethods('additional_card');
		this.character = new TableRowMethods('character_info');
		this.global_event = new TableRowMethods('global_event');
		this.health = new TableRowMethods('health');
		this.hobbies = new TableRowMethods('hobbies');
		this.phobia = new TableRowMethods('phobia');
	}
}

export default new PreparatoryMethods();
