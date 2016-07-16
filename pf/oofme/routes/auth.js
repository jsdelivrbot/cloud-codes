// authentication router

var express = require('express');
var router = express.Router();


module.exports = function(passport) {

	router.get('/facebook', passport.authenticate('facebook', { scope: 'public_profile' }));

	// handle the callback after facebook has authenticated the user
	router.get('/facebook/callback', passport.authenticate('facebook', {
		successRedirect: '/profile',
		failureRedirect: '/'
	}));

	return router;
}
