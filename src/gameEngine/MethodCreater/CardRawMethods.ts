import randomizer from '../../helpers/randomizer';
import bunkerPool from '../../SQL _DB/pools/Bunker/bunkerPool';

class CardRawMethods {
	[name: string]: Function;

	constructor(name: string) {
		this.all = () => this.getAllTableData(name);
		this.random = () => this.getRandomTableData(name);
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
		return randomData.rows;
	}
}

export default CardRawMethods;
