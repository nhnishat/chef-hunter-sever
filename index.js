const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
const chef = require('./Data/chefProfiles.json');

app.get('/', (req, res) => {
	res.send('hello world');
});
app.get('/chef', (req, res) => {
	res.send(chef);
});

app.listen(port, () => {
	`app port is : ${port}`;
});
