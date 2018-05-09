const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const massive = require('massive');
const config = require('./config');

const app = express();
// DB Setup

massive(config.connectionString)
	.then(db => {
		app.set('db', db);
		// db.initTables.initTables()
		// .then( response => {
		//   console.log('User table init'); })

		console.log('connected to the DB');
	})
	.catch(err => console.log(`[DB ERROR]`, err));

// App setup
// app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
// const router = require('./router')(app);

// Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port, () => {
	console.log('server is running on port ' + port);
});
