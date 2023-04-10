// Imports the default exported module from the randomizer.ts file and the 'bunkerPool' pool object from a database connection module.
import randomizer from '../../helpers/randomizer';
import bunkerPool from '../../SQL _DB/pools/Bunker/bunkerPool';

// Declares an interface which defines methods that can be used to interact with a game row in a database table for future implementation.
export interface IGameRowMethods {
	all: Function;
	random: Function;
	length: Function;
	byId: Function;
}

// Creates a new class called 'TableRowMethods' which implements the above interface.
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

	// Method that retrieves all rows from a given table in the bunker database.
	async getAllTableData(name: string) {
		const allData = await bunkerPool.query(`SELECT * FROM ${name}`);
		return allData.rows;
	}

	// Method that retrieves a random row from a given table by calling the 'getAllTableData' method to get all data from the table, generating a random index and then returning the row at that index. The while loop ensures that we do not return the first row in the table as that is considered reserved.
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

	// Method that retrieves a row from a given table by its ID.
	async getById(name: string, id: number) {
		const randomData = await bunkerPool.query(
			`SELECT * FROM ${name} WHERE id=${id}`,
		);

		return randomData.rows[0];
	}

	// Method that retrieves the length of a given table in the bunker database.
	async getDataLength(name: string) {
		const data = await this.getAllTableData(name);

		return data.length;
	}
}

// Exports an instance of the 'TableRowMethods' class as the default export.
export default TableRowMethods;
