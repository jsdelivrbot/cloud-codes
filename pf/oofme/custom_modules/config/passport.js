// passport config.s.
// 
var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;

// load up the user model
var User = require('../models/User.js');

// load the auth variables
var configAuth = require('./authCredentials.js');

module.exports = function(passport) {

	// used to serialize the user for the session
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// used to deserialize the user
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	// code for login (use('local-login', new LocalStategy))
	// code for signup (use('local-signup', new LocalStategy))
	// =========================================================================
	// GOOGLE ==================================================================
	// =========================================================================
	passport.use(new GoogleStrategy({

			clientID: configAuth.googleAuth.clientID,
			clientSecret: configAuth.googleAuth.clientSecret,
			callbackURL: configAuth.googleAuth.callbackURL,

		},
		function(token, refreshToken, profile, done) {
			// make the code asynchronous
			// User.findOne won't fire until we have all our data back from Google
			process.nextTick(function() {

				// try to find the user based on their google id
				User.findOne({ 'google.id': profile.id }, function(err, user) {
					if (err)
						return done(err);

					if (user) {

						// if a user is found, log them in
						
						// update all of the relevant information
						user.google.id = profile.id;
						user.google.token = token;
						user.google.name = profile.displayName;
						user.google.email = profile.emails[0].value; // pull the first email
						user.google.photo = profile.photos[0].value; // pull the first email
						user.google.lastUpdatedOn = Date.now(); // pull the first email

						// update the user
						user.save(function(err) {
							if (err)
								throw err;
							return done(null, user);
						});

					} else {
						// if the user isnt in our database, create a new user
						var newUser = new User();

						console.log(JSON.stringify(profile, null, 4));

						// set all of the relevant information
						newUser.google.id = profile.id;
						newUser.google.token = token;
						newUser.google.name = profile.displayName;
						newUser.google.email = profile.emails[0].value; // pull the first email
						newUser.google.photo = profile.photos[0].value; // pull the first email
						newUser.google.lastUpdatedOn = Date.now(); // pull the first email

						// save the user
						newUser.save(function(err) {
							if (err)
								throw err;
							return done(null, newUser);
						});
					}
				});
			});
		}));
	// // =========================================================================
	// // TWITTER =================================================================
	// // =========================================================================
	passport.use(new TwitterStrategy({

			consumerKey: configAuth.twitterAuth.consumerKey,
			consumerSecret: configAuth.twitterAuth.consumerSecret,
			callbackURL: configAuth.twitterAuth.callbackURL

		},

		// twitter will send back the token and profile
		function(token, tokenSecret, profile, done) {
			// make the code asynchronous
			// User.findOne won't fire until we have all our data back from Twitter
			process.nextTick(function() {

				User.findOne({ 'twitter.id': profile.id }, function(err, user) {

					// if there is an error, stop everything and return that
					// ie an error connecting to the database
					if (err)
						return done(err);

					// if the user is found then log them in
					if (user) {

						// update all of the user data that we need
						user.twitter.id = profile.id;
						user.twitter.token = token;
						user.twitter.username = profile.username;
						user.twitter.displayName = profile.displayName;
						user.twitter.lastUpdatedOn = Date.now();
						user.twitter.photo = profile.profile_image_url_https;

						// save our user into the database
						user.save(function(err) {
							if (err)
								throw err;

							// user found, return that user
							return done(null, user);
						});

					} else {
						// if there is no user, create them
						var newUser = new User();

						console.log(JSON.stringify(profile, null, 4));

						// set all of the user data that we need
						newUser.twitter.id = profile.id;
						newUser.twitter.token = token;
						newUser.twitter.username = profile.username;
						newUser.twitter.displayName = profile.displayName;
						newUser.twitter.lastUpdatedOn = Date.now();
						newUser.twitter.photo = profile.photos[0].value;

						// save our user into the database
						newUser.save(function(err) {
							if (err)
								throw err;
							return done(null, newUser);
						});
					}
				});
			});
		}));
	// =========================================================================
	// FACEBOOK ================================================================
	// =========================================================================
	passport.use(new FacebookStrategy({

			// pull in our app id and secret from our auth.js file
			clientID: configAuth.facebookAuth.clientID,
			clientSecret: configAuth.facebookAuth.clientSecret,
			callbackURL: configAuth.facebookAuth.callbackURL,
			profileFields: ['id', 'displayName', 'photos', 'emails']

		},

		// facebook will send back the token and profile
		function(token, refreshToken, profile, done) {

			// asynchronous
			process.nextTick(function() {

				// find the user in the database based on their facebook id
				User.findOne({ 'facebook.id': profile.id }, function(err, user) {

					// if there is an error, stop everything and return that
					// ie an error connecting to the database
					if (err)
						return done(err);

					// if the user is found, then log them in
					if (user) {

						console.log(JSON.stringify(user, null, 4));

						user.facebook.id = profile.id; // set the users facebook id                   
						user.facebook.token = token; // we will save the token that facebook provides to the user                    
						user.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
						user.facebook.name = profile.displayName; // look at the passport user profile to see how names are returned
						user.facebook.photo = profile.photos[0].value;
						user.facebook.lastUpdatedOn = Date.now();

						// update our user to the database
						user.save(function(err) {
							if (err)
								throw err;

							console.log("updated");
							// if successful, return the new user
							return done(null, user);
						});

					} else {
						// if there is no user found with that facebook id, create them
						var newUser = new User();

						console.log(JSON.stringify(profile, null, 4));

						// set all of the facebook information in our user model
						newUser.facebook.id = profile.id; // set the users facebook id                   
						newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
						newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
						newUser.facebook.name = profile.displayName; // look at the passport user profile to see how names are returned
						newUser.facebook.photo = profile.photos[0].value;
						newUser.facebook.lastUpdatedOn = Date.now();

						// save our user to the database
						newUser.save(function(err) {
							if (err)
								throw err;

							// if successful, return the new user
							return done(null, newUser);
						});
					}

				});
			});

		}));

};
