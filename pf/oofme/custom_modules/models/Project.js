var mongoose = require('mongoose');

// define the schema for our project model
var projectSchema = mongoose.Schema({
	id: String,
	name: String,
	authors: Array,
	isPublished: Boolean,
	tagline: String,
	files: Array
});


// create the model for projects and expose it to our app
module.exports = mongoose.model('Project', projectSchema);