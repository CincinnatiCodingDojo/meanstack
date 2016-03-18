var express = require('express');
var dummy = require('dummy');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    dummy.createPost();
//  res.send('respond with a resource');
});

module.exports = router;
