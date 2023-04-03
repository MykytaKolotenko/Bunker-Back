import randomizer from '../../helpers/randomizer';
import bunkerPool from '../../SQL _DB/pools/Bunker/bunkerPool';

export interface IGameRowMethods {
	all: Function;
	random: Function;
	length: Function;
	byId: Function;
}

class TableRowMethods implements IGameRowMethods {
	random: Function;
	all: Function;
	length: Function;
	byId: Function;

	constructor(name: string) {
		this.all = () => this.getAllTableData(name);
		this.random = () => this.getRandomTableData(name);
		this.length = () => this.getDataLength(name);
		this.byId = (id: number) => this.getById(name, id);
	}

	async getAllTableData(name: string) {
		const allData = await bunkerPool.query(`SELECT * FROM ${name}`);
		return allData.rows;
	}

	async getRandomTableData(name: string) {
		const allData = await this.getAllTableData(name);

		let random: number = randomizer(allData.length);

		while (random === 0) {
			random = randomizer(allData.length);
		}

		const query = `SELECT * FROM ${name} WHERE id=${random}`;
		const randomData = await bunkerPool.query(query);

		return randomData.rows[0];
	}

	async getById(name: string, id: number) {
		const randomData = await bunkerPool.query(
			`SELECT * FROM ${name} WHERE id=${id}`,
		);

		return randomData.rows[0];
	}

	async getDataLength(name: string) {
		const data = await this.getAllTableData(name);

		return data.length;
	}
}

export default TableRowMethods;
