// Imports the default exported module from TableRowMethods.ts and exports IGameRowMethods interface for use in other modules.
import TableRowMethods, { IGameRowMethods } from './TableRowMethods';

// Creates a new class called 'PreparatoryMethods'.
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

	// Constructor method of the 'PreparatoryMethods' class that initializes properties on its instance.
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

// Exports an instance of the 'PreparatoryMethods' class as the default export.
export default new PreparatoryMethods();
