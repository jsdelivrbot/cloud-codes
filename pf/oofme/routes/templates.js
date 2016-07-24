var express = require('express');
var router = express.Router();
var path = require('path');
/* GET get templates */
// queries will arive like /templates/<...>/

router.get('/createNewProj', function(req, res) {
	res.sendFile('create-new-project.templ.html', { root: path.join(__dirname, '../views/templates/') });
});

module.exports = router;
