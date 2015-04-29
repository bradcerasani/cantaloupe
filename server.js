var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Init Express
var app = express();
var router = express.Router();

var port = process.env.port || 8080;

// Express + bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/piDesk');

app.use('/api', require('./routes/api'));

// Start server
app.listen(port);
console.log('API is live on port ' + port);
