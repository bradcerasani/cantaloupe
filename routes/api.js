var express = require('express');
var router = express.Router();

// Routes
router.get('/', function(req, res) {
  res.json({ message: 'Hello Monkey'});
});

// Expose router
module.exports = router;
