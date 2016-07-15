var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('index.html', { root: path.join(__dirname, '../views') });
});

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback',
	passport.authenticate('google', {
		successRedirect: '/profile',
		failureRedirect: '/'
	})
);

router.get('/profile', function(req, res){
	res.send("signed in");
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
module.exports = router;
