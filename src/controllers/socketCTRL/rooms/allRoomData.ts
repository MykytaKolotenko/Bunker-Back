import { Server, Socket } from 'socket.io';
import intervalEmitSendHelper from '../../../helpers/intervalEmitSendHelper';
import socketActions from './roomSocketActions';

export default (io: Server, socket: Socket) => {
	const allRoomsData = { info: 'all rooms data' };

	return intervalEmitSendHelper(socket, socketActions.ALL_ROOMS, allRoomsData);
};
