import { Server, Socket } from 'socket.io';
import socketActions from './roomSocketActions';

export default (io: Server, socket: Socket) => {
	const deleteRoom = { info: 'delete room' };

	return socket.emit(socketActions.ALL_ROOMS, deleteRoom);
};
