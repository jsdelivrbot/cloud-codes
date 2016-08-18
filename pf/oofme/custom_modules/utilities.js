// utilities
module.exports = {
	reqAuthenticated: function(req){
		// if(req.user) return true;
		// else return false;
		return true;
	},

	getCurrentUser: function(req){
		// return req.user
		return {
			id: "57aecf658807c42710307d58",
			name: "vaju"
		};
	}
}
