var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('land.html', { root: path.join(__dirname, '../views') });
});

router.get('/profile', function(req, res){
	res.send("profile.");
})
module.exports = router;
