var express = require('express');
var path = require('path');
var libV = require('../custom_modules/config/lib_versions.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: "oofme",
		v_angularjs: libV.angularJS,
		v_angularMaterial: libV.angular_material,
		v_angularAria: libV.angular_aria,
		v_angularAnimate: libV.angular_animate,
		v_angularMessages: libV.angular_messages
	});
});

router.get('/profile', function(req, res){
	console.log(JSON.stringify(req.session, null, 4));
	res.send("profile.");
});

router.get('/u', function(req, res){
	res.sendFile('land.html', { root: path.join(__dirname, '../views') });
});

// router.get('/templ/createNewProj', function(req, res){
// 	res.sendFile('create-new-project.templ.html', { root: path.join(__dirname, '../views/templates/') });
// });

module.exports = router;
