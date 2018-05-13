const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const config = require('./config');
const app = express();

// DB Setup
massive(config.connectionString)
	.then(db => {
		app.set('db', db);
		console.log('connected to the DB');
	})
	.catch(err => console.log(`[DB ERROR]`, err));

app.use(bodyParser.json({ type: '*/*' }));
app.use(cors());
const router = require('./router')(app);

// Server Setup
const port = 8080;

app.listen(port, () => {
	console.log('server is running on port ' + port);
});
