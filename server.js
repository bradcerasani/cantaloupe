var express = require('express');
var bodyParser = require('body-parser');

// Init Express
var app = express();
var router = express.Router();

// Express + bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/piDesk');

var port = process.env.port || 8080;

// Routes
router.get('/', function(req, res) {
  res.json({ message: 'Hello World'});
});

app.use('/api', router);

// Start server
app.listen(port);
console.log('API is live on port ' + port);