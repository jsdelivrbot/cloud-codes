var mongoose = require('mongoose');

// define the schema for our file model
var fileSchema = mongoose.Schema({

	id: String,
	name: String,
	authors: Array,
	isPublished: Boolean,
	tagline: String,
	content: Object

});


// create the model for file and expose it to our app
module.exports = mongoose.model('File', fileSchema);