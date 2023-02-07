import { Server, Socket } from 'socket.io';
import allRoomData from './allRoomData';
import createRoom from './createRoom';
import deleteRoom from './deleteRoom';

export default (io: Server, socked: Socket) => {
	allRoomData(io, socked);
	createRoom(io, socked);
	deleteRoom(io, socked);
};
