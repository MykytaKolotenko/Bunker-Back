const app = require('./server');
const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
	console.log(`Example app listening on port ${PORT || 3000}!`);
});
