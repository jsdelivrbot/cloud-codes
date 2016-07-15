// Mongoose schema for storing user data required for signing in

var mongoose = require('mongoose');

// needed to encrypt passwords

var userSchema = mongoose.Schema({
	facebook:{
		id: String,
		token: String,
		email: String,
		name: String
	},
	google:{
		id: String,
		token: String,
		email: String,
		name: String
	}
});

// exporting the schema
module.exports = mongoose.model('User', userSchema);