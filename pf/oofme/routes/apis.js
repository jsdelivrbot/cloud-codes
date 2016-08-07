var express = require('express');
var shortid = require('shortid');
var router = express.Router();

// test request
router.get('/', function(req, res){
	res.send("Invalid- request: reporting from apis.j");
});

// api to generate short id with 'shortid' lib.
router.get('/getShortID', function(req, res){
	res.send(shortid.generate());
});

// sending initial data.
router.get('/initializeMe', function(req, res){
	res.send("hi");
});


module.exports = router;
