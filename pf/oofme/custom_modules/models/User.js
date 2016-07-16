var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({

	facebook: {
		id: String,
		token: String,
		email: String,
		name: String,
		photo: String,
		lastUpdatedOn: Date
	},
	twitter: {
		id: String,
		token: String,
		displayName: String,
		username: String,
		photo: String,
		lastUpdatedOn: Date
	},
	google: {
		id: String,
		token: String,
		email: String,
		name: String
	}

});


// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);