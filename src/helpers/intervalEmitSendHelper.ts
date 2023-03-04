import { Socket } from 'socket.io';

const emitTimeInterval: number = Number(process.env.EMIT_INTERVAL) || 5000;

const intervalEmitSendHelper = (socket: Socket, action: string, cb: any) => {
	const emitData = () => socket.emit(action, cb);

	return setInterval(emitData, emitTimeInterval);
};

export default intervalEmitSendHelper;
