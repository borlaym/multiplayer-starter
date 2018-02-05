import express from 'express';

const app = express();

app.get('/api/ping', (req, res) => res.json({
	ping: 'pong'
}));

app.listen(9000);