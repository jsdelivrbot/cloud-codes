var express = require('express');
var shortid = require('shortid');
var router = express.Router();

// load up the User model
var User = require('../custom_modules/models/User.js');

// test request
router.get('/', function(req, res) {
    res.send("Invalid- request: reporting from apis.j");
});

// api to generate short id with 'shortid' lib.
router.get('/getShortID', function(req, res) {
    if (req.user) {
        // user logged in
        res.send(shortid.generate());
    } else {
        // not logged in
        res.send("invalid request");
    }
});

// sending initial data.
router.get('/initializeMe', function(req, res) {
    if (req.user) {
        // user logged in
        User.findOne({ _id: req.user._id }, 'allProjects', function(err, response) {
            console.log('allProjects ', response.allProjects);
            res.send(response.allProjects);
            // res.send(initialData);
        });
    } else {
        // not logged in
        res.send("invalid request");
    }
});


module.exports = router;

var initialData = {
    projects: [{
        id: 1,
        name: "Oceanbees",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
        isPublished: true,
    }, {
        id: 2,
        name: "Facebook",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
        isPublished: true,
    }, {
        id: 3,
        name: "Good Methods",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
        isPublished: true,
    }, {
        id: 4,
        name: "Accenture",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus id velit, esse sequi ",
        isPublished: true,
    }]
}
