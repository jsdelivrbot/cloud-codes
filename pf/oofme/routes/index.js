var express = require('express');
var path = require('path');
var shortid = require('shortid');
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

router.get('/projects', function(req, res){
	res.send("hi");
});

var initialData = {
	projects:[
		{
			id: 1,
			name: "Oceanbees",
			des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
			isPublished: true,
		},{
			id: 2,
			name: "Facebook",
			des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
			isPublished: true,
		},{
			id: 3,
			name: "Good Methods",
			des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
			isPublished: true,
		},{
			id: 4,
			name: "Accenture",
			des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
			isPublished: true,
		}
	]
}
// router.get('/templ/createNewProj', function(req, res){
// 	res.sendFile('create-new-project.templ.html', { root: path.join(__dirname, '../views/templates/') });
// });

module.exports = router;
