import express from 'express';
import cors from 'cors';
require('dotenv').config();

const app: any = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: any, res: any) => {
	res.json({ 1: 'hello' });
});

export { app };
