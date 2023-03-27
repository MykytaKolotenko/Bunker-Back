// Imports dependencies
import app from './app';
import GameRow from './gameEngine/TableMethods/PreparatoryMethods';
import Room from './controllers/socketCTRL/rooms/RoomHandler';
import socketStart from './socket';
import bunkerPool from './SQL _DB/pools/Bunker/bunkerPool';
import PreparatoryMethods from './gameEngine/TableMethods/PreparatoryMethods';

// Sets ports for server and sockets
const PORT = process.env.PORT || String(3000);
const WS_PORT = process.env.WS_PORT || String(3001);

// Main async function that handles the port queries and initializes the service
(async () => {
	app.listen(PORT, () => {
		console.log(`Example app listening at http://localhost:${PORT}`);
		console.log(`Example app:socket listening at http://localhost:${WS_PORT}`);
	});

	// Queries SQL and returns an error if any
	try {
		await bunkerPool.query('SELECT NOW()');
		console.log('sql on');
	} catch (err) {
		console.log(err);
	}

	// Initializes Game Methods, which based on DB data
	const x = new Room(`Nikita's Room`, 'fsdfsdf');
	x.addPlayer('ds');

	await x.startGame();

	// console.log(x.players[0].game_card?.user_card);

	// Starts the socket
	socketStart(WS_PORT);
})();
