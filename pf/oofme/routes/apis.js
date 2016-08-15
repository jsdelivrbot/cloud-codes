"use strict";

var express = require('express');
var shortid = require('shortid');
var request = require('request');

var router = express.Router();

// load utilities
var util = require('../custom_modules/utilities.js');
// load up the User model
var User = require('../custom_modules/models/User.js');
// load the Project model
var Project = require('../custom_modules/models/Project.js');

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
		// 57b1e2f83f1b32d93e27a828
		// { _id: req.user._id }
		User.findOne({ _id: "57b1e2f83f1b32d93e27a828" }, 'allProjects', function(err, response) {
			if (err) {
				res.status(500).send("Oh snap, Something went wrong!")
			} else {
				console.log('allProjects ', typeof(response.allProjects));
				console.log('allProjects', response.allProjects);
				res.send(response.allProjects);
			}
		});
	} else {
		// not logged in
		res.status(403).send("Looks like u r a stranger!");
	}
});

// addNewProject
router.post('/addNewProject', function(req, res) {
	// check if the user is logged in
	if (util.reqAuthenticated(req)) {
		let statusCount = 0;
		var currentUser = util.getCurrentUser(req);
		var NewProject = new Project({
			id: req.body.id,
			name: req.body.name,
			isPublished: req.body.published,
			authors: [{
				id: currentUser.id,
				name: currentUser.name
			}]
		});
		// create new project
		NewProject.save(function(err, NewProject) {
			if (err) {
				// if err, abort
				console.log('err in adding new project', err);
				res.send(false);
			} else {
				console.log('NewProject', NewProject);
				progress();
			}
		});
		User.update({ _id: "57b1e2f83f1b32d93e27a828" }, {
			$push: { "allProjects": req.body }
		}, function(err, raw) {
			if (err) {
				console.log('err ', err);
				res.send(false);
			} else if (raw.nModified > 0) {
				console.log('raw', raw);
				progress();
			} else {
				res.send(false);
			}
		});

		let progress = function() {
			console.log('progress called');
			statusCount++;
			if (statusCount == 2) {
				res.send(true);
			}
		}
	} else {
		// not logged in
		res.send("invalid request");
	}
});

// delete Project
router.get('/deleteProject/:id', function(req, res) {
	// check if the user is logged in
	if (util.reqAuthenticated(req)) {
		User.update({ _id: "57b1e2f83f1b32d93e27a828" }, {
			$pull: { "allProjects": { id: req.params.id } }
		}, function(err, raw) {
			// console.log('err', err);
			// console.log('raw', raw);
			if (err) {
				res.send(false);
			} else {
				// delete the project.
				Project.remove({ id: req.params.id }, function(err, raw) {
					if (err) {
						console.log('err', err);
						res.send(false);
					} else {
						console.log("raw", raw);
						res.send(true);
					}
				});
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
		// 	Project.update({ id: req.body.id }, {
		// 		$set: {
		// 			name: req.body.name
		// 		}
		// 	}, function(err, raw){
		// 		//
		// 	})};
		User.update({
			_id: "57b1e2f83f1b32d93e27a828",
			"allProjects.id": req.body.id
		}, {
			$set: {
				"allProjects.$.name": req.body.name,
				"allProjects.$.tagline": req.body.tagline
			}
		}, function(err, raw) {
			// console.log('err', err);
			// console.log('raw', raw);
			if (err) {
				console.log('err ', err);
				res.send(false);
				return false;
			} else {
				res.send(true);
				return true;
			}
		});
		// res.send(false);
	} else {
		res.send("invalid request!")
	}
});

router.get('/testReq', function(req, res) {
	request('http://localhost:3000/apis/initializeMe', function(error, response, body) {
		res.send(body);
	});
})
module.exports = router;
