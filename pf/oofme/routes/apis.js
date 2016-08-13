var express = require('express');
var shortid = require('shortid');
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
		// 57aecf658807c42710307d58
		// { _id: req.user._id }
		User.findOne({ _id: "57aecf658807c42710307d58" }, 'allProjects', function(err, response) {
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
	// check if the user is logged in

	if (util.reqAuthenticated(req)) {
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
				// if no err, update allProjects
				User.update({ _id: "57aecf658807c42710307d58" }, {
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
		User.update({ _id: "57aecf658807c42710307d58" }, {
			$pull: { "allProjects": { id: req.params.id } }
		}, function(err, raw) {
			// console.log('err', err);
			// console.log('raw', raw);
			if (err) {
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

// update project
router.post('/updateProject', function(req, res) {
	if (util.reqAuthenticated(req)) {
		User.update({
			_id: "57aecf658807c42710307d58",
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
