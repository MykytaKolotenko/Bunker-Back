import app from './app';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import sockedCtrl from './socketCTRL/rooms';

const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: '*',
	},
});

const onConnection = (socket: Socket) => {
	sockedCtrl(io, socket);
};

io.on('connection', onConnection);

const socketStart = (port: string) => httpServer.listen(port);

export default socketStart;
