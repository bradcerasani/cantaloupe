var express = require('express');
var router = express.Router();

var State = require('../models/state');

var sampleResponse = {
  moving: false,
  direction: "",
  height: "93.67"
};

// Routes
router.route('/')
  .get(function(req, res){
    res.json({ message: 'Hello World'});
  });

router.route('/state')
  .get(function(req, res){
    res.json(sampleResponse);
  });

// Expose router
module.exports = router;