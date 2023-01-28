const express = require('express');
const app = express();
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();
const httpServer = createServer();
const io = new Server(8081, {});

io.on('connection', (socket) => {
	socket.emit('hello');
	console.log('a user connected');
});

app.get('/', (req: any, res: any) => {
	res.send('Hello World!');
});

export default app;
