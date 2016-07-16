// authentication router

var express = require('express');
var router = express.Router();


module.exports = function(passport) {

	// auth with Facebook
	router.get('/facebook', passport.authenticate('facebook', { scope: 'public_profile' }));
	// handle the callback after facebook has authenticated the user
	router.get('/facebook/callback', passport.authenticate('facebook', {
		successRedirect: '/profile',
		failureRedirect: '/'
	}));

	// auth wuth Twitter
	router.get('/twitter', passport.authenticate('twitter'));
	// handle the callback after twitter has authenticated the user
	router.get('/twitter/callback', passport.authenticate('twitter', {
		successRedirect: '/profile',
		failureRedirect: '/'
	}));


	return router;
}
