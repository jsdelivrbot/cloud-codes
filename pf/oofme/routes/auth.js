// authentication router

var express = require('express');
var router = express.Router();


module.exports = function(passport) {

	// auth with Facebook
	router.get('/facebook', passport.authenticate('facebook', { scope: 'public_profile' }));
	// handle the callback after facebook has authenticated the user
	router.get('/facebook/callback', passport.authenticate('facebook', {
		successRedirect: '/',
		failureRedirect: '/loginfailed'
	}));

	// auth wuth Twitter
	router.get('/twitter', passport.authenticate('twitter'));
	// handle the callback after twitter has authenticated the user
	router.get('/twitter/callback', passport.authenticate('twitter', {
		successRedirect: '/',
		failureRedirect: '/loginfailed'
	}));

	// auth with Google
	router.get('/google', passport.authenticate('google', { scope: ['profile', 'email','https://www.googleapis.com/auth/plus.login'] }));
	// the callback after google has authenticated the user
	router.get('/google/callback', passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/loginfailed'
	}));

	return router;
}
