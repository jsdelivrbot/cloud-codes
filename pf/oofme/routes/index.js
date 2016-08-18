var express = require('express');
var path = require('path');
var shortid = require('shortid');
var util = require('../custom_modules/utilities.js');
var libV = require('../custom_modules/config/lib_versions.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (util.reqAuthenticated(req)) {
		res.render('index', {
			title: "oofme",
			v_angularjs: libV.angularJS,
			v_angularMaterial: libV.angular_material,
			v_angularAria: libV.angular_aria,
			v_angularAnimate: libV.angular_animate,
			v_angularMessages: libV.angular_messages
		});
	} else {
		res.redirect('/u');
	}
});

router.get('/profile', function(req, res) {
	console.log(JSON.stringify(req.session, null, 4));
	res.send("profile.");
	console.log("req.session.passport.user :" + JSON.stringify(req.session.passport.user, null, 4));
});

router.get('/loginfailed', function(req, res) {
	res.send("loginfailed");
});

router.get('/u', function(req, res) {
	res.sendFile('land.html', { root: path.join(__dirname, '../views') });
});

router.get('/projects', function(req, res) {
	res.send("hi");
});

// router.get('/auth', function(req, res){
// 	res.sendFile('land.html', { root: path.join(__dirname, '../views/templates/') });
// });

module.exports = router;
