import { Socket } from 'socket.io';
import { io } from '../../socket';
import roomCTRL from './rooms';

const connection = (socket: Socket) => {
	roomCTRL(io, socket);
};

export default connection;
