var express = require('express');
var shortid = require('shortid');
var router = express.Router();

// load utilities
var util = require('../custom_modules/utilities.js');
// load up the User model
var User = require('../custom_modules/models/User.js');

// test request
router.get('/', function(req, res) {
	res.send("Invalid- request: reporting from apis.js");
});

// api to generate short id with 'shortid' lib.
router.get('/getShortID', function(req, res) {
	if (util.reqAuthenticated(req)) {
		// user logged in
		res.send(shortid.generate());
	} else {
		// not logged in
		res.send("invalid request");
	}
});

// sending initial data.
router.get('/initializeMe', function(req, res) {
	if (util.reqAuthenticated(req)) {
		// user logged in
		// 57a71fe67491b1926b129bbf
		// { _id: req.user._id }
		User.findOne({ _id: "57a71fe67491b1926b129bbf" }, 'allProjects', function(err, response) {
			console.log('allProjects ', response.allProjects);
			res.send(response.allProjects);
		});
	} else {
		// not logged in
		res.send("invalid request");
	}
});

// addNewProject
router.post('/addNewProject', function(req, res) {
	if (util.reqAuthenticated(req)) {
		console.log("req.body: ", JSON.stringify(req.body));
		// user logged in
		User.update({ _id: "57a71fe67491b1926b129bbf" }, {
			$push: { "allProjects": req.body }
		}, function(err, raw) {
			// console.log('err', err);
			// console.log('raw', raw);
			if (err) {
				console.log('err ', err);
				res.send(false);
			} else {
				res.send(true);
			}
		});
	} else {
		// not logged in
		res.send("invalid request");
	}
});

// delete Project
router.get('/deleteProject/:id', function(req, res) {
	if (util.reqAuthenticated(req)) {
		// user logged in
		User.update({ _id: "57a71fe67491b1926b129bbf" }, {
			$pull: { "allProjects": { id: req.params.id } }
		}, function(err, raw) {
			// console.log('err', err);
			// console.log('raw', raw);
			if (err) {
				res.send(false);
			} else{
				res.send(true);
			}
		});
	} else {
		// not logged in
		res.send("invalid request");
	}
});

// update project
router.post('/updateProject', function(req, res) {
	if (util.reqAuthenticated(req)) {
		User.update({ 
			_id: "57a71fe67491b1926b129bbf",
			"allProjects.id": req.body.id
		}, {
			$set: { 
				"allProjects.$.name": req.body.name,
				"allProjects.$.tag": req.body.tagline
			}
		}, function(err, raw) {
			// console.log('err', err);
			// console.log('raw', raw);
			if (err) {
				console.log('err ', err);
				res.send(false);
			} else {
				res.send(true);
			}
		});
		// res.send(false);
	} else {
		res.send("invalid request!")
	}
})
module.exports = router;

// for test purpose.
// var initialData = {
// 	projects: [{
// 		id: 1,
// 		name: "Oceanbees",
// 		des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
// 		isPublished: true,
// 	}, {
// 		id: 2,
// 		name: "Facebook",
// 		des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
// 		isPublished: true,
// 	}, {
// 		id: 3,
// 		name: "Good Methods",
// 		des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
// 		isPublished: true,
// 	}, {
// 		id: 4,
// 		name: "Accenture",
// 		des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
// 		isPublished: true,
// 	}]
// }
