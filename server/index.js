const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth');
const app = express();


// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
const router = require('./router')(app);

// Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('server is listening on port', port);