import randomizer from '../../helpers/randomizer';
import bunkerPool from '../../SQL _DB/pools/Bunker/bunkerPool';

class GameRowMethods {
	[name: string]: Function;

	constructor(name: string) {
		this.all = () => this.getAllTableData(name);
		this.random = () => this.getRandomTableData(name);
		this.dataLength = () => this.getDataLength(name);
		this.byId = (id: number) => this.getById(name, id);
	}

	async getAllTableData(name: string) {
		const allData = await bunkerPool.query(`SELECT * FROM ${name}`);
		return allData.rows;
	}

	async getRandomTableData(name: string) {
		const allData = await this.getAllTableData(name);

		const randomData = await bunkerPool.query(
			`SELECT * FROM ${name} WHERE id=${randomizer(allData.length)}`,
		);
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

export default GameRowMethods;
