import { Server, Socket } from 'socket.io';
import socketActions from './roomSocketActions';

export default (io: Server, socket: Socket) => {
	const createRoom = { info: 'create room' };

	return socket.emit(socketActions.CREATE_ROOM, createRoom);
};
