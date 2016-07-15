// authentication router

var express = require('express');
var router = express.Router();


router.get('/facebook', passport.authenticate('facebook', { scope: 'email' })));

// handle the callback after facebook has authenticated the user
app.get('/facebook/callback', passport.authenticate('facebook', {
	successRedirect: '/profile',
	failureRedirect: '/'
}));
module.exports = router;
