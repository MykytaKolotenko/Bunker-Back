import { Socket } from 'socket.io';

const intervalEmitSendHelper = (socket: Socket, action: string, cb: any) => {
	const interval: number = Number(process.env.EMIT_INTERVAL) || 5000;
	const sendData = () => socket.emit(action, cb);

	return setInterval(sendData, interval);
};

export default intervalEmitSendHelper;
