import app from './app';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import sockedCtrl from './controllers/socketCTRL/rooms';
import connection from './controllers/socketCTRL/connection';

const httpServer = createServer(app);
export const io = new Server(httpServer, {
	cors: {
		origin: '*',
	},
});

io.on('connection', connection);

const socketStart = (port: string) => httpServer.listen(port);

export default socketStart;
