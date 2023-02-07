import { Server, Socket } from 'socket.io';
import socketActions from './roomSocketActions';

export default (io: Server, socket: Socket) => {
	const deleteRoom = { info: 'delete room' };

	return socket.emit(socketActions.DELETE_ROOM, deleteRoom);
};
