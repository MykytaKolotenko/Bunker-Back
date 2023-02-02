import app from './app';
import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: '*'
	}
});

io.on('connection', (socket) => {
	socket.emit('hello', 'hello');
	console.log('User connected');

	socket.on('disconnect', (reason) => {
		console.log(reason);
	});
});

const socketStart = (port: string) => httpServer.listen(port);

export default socketStart;
