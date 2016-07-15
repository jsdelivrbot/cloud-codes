var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('land.html', { root: path.join(__dirname, '../views') });
});

router.post('/auth/google/storeauthcode', function(req, res){
	console.log(req.body);
})
module.exports = router;
