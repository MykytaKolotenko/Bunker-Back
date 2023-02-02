import express from 'express';
const app = express();

import dotenv from 'dotenv';

dotenv.config();

app.get('/', (req: any, res: any) => {
	res.send('Hello World!');
});

export default app;
