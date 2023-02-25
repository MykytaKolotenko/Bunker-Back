import app from './app';
import socketStart from './socket';
import BunkerPool from './SQL/pools/BunkerPool';

const PORT = process.env.PORT || String(3000);
const WS_PORT = process.env.WS_PORT || String(3001);

(async () => {
	app.listen(PORT, () => {
		console.log(`Example app listening at http://localhost:${PORT}`);
		console.log(`Example app:socket listening at http://localhost:${WS_PORT}`);
	});

	socketStart(WS_PORT);
})();
