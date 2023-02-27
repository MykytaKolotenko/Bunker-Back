import BunkerPool from '../../SQL _DB/pools/Bunker/bunkerPool';
import CardRawMethods from './CardRawMethods';

class CardMethods {
	[key: string]: any;

	async getAlltablesNames(): Promise<any> {
		const allData = await BunkerPool.query(
			`select * from information_schema.tables
    where table_schema not in ('information_schema', 'pg_catalog') and
    table_type = 'BASE TABLE' `,
		);

		return allData.rows.map((item: any) => item.table_name);
	}

	addMethodsFromTable(name: string) {
		const newMethods = new CardRawMethods(name);

		this[name] = newMethods;
	}

	async init() {
		const tableNames = await this.getAlltablesNames();
		tableNames.forEach((tableName: string) => {
			this.addMethodsFromTable(tableName);
		});
	}
}

export default new CardMethods();
