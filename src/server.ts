import app from './app';

const port = process.env.PORT;

app.listen(port || 3000, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
