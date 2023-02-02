interface IListItemData {
	item: string | number;
	visible: boolean;
}

interface IGameData {
	proffesion: IListItemData;
	additional_info: IListItemData;
	baggage: IListItemData;
	skill_1: IListItemData;
	skill_2: IListItemData;
	character: IListItemData;
	health: IListItemData;
	hobbies: IListItemData;
	phobia: IListItemData;
	weigth: IListItemData;
	gender: IListItemData;
	age: IListItemData;
}

export default IGameData;
