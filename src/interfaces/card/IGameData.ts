interface IListItemData {
	item: string | number | null;
	visible: boolean;
}

interface IGameFriendOrEnemy {
	friend_enemy: string | null;
	visible: boolean;
}

interface IGameData {
	proffesion: IListItemData;
	additional_info: IListItemData;
	baggage: IListItemData;
	skill_1: IListItemData;
	skill_2: IListItemData;
	character_info: IListItemData;
	health: IListItemData;
	hobbies: IListItemData;
	phobia: IListItemData;
	weigth: IListItemData;
	gender: IListItemData;
	age: IListItemData;
	friend: IGameFriendOrEnemy;
}

export default IGameData;
