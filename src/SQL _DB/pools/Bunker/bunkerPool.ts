const { Pool } = require('pg');

const { SQL_PASSWORD, SQL_USER, SQL_PORT, SQL_HOST, SQL_DATABASE } =
	process.env;

const bunkerPool = new Pool({
	user: SQL_USER || '',
	password: SQL_PASSWORD,
	host: SQL_HOST,
	port: Number(SQL_PORT),
	database: SQL_DATABASE,
});

export default bunkerPool;
