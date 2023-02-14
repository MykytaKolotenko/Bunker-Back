import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.get('/', (req: any, res: any) => {
	res.send('Hello World!');
});

export default app;
