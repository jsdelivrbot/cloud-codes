const expect = require("chai").expect;
const request = require('request');
const config = require('../custom_modules/config/config.js');

describe("API TEST PROCESS > ", function() {
	describe("Initializes project > ", function() {
		var url = config.domain + '/apis/initializeMe';
		it("returns status 200", function(done) {
			request(url, function(err, res, body) {
				expect(res.statusCode).to.equal(200);
				done();
			});
		});
		it("response is array", function(done) {
			request(url, function(err, res, body) {
				expect(
					Object.prototype.toString.call(JSON.parse(body)) === '[object Array]'
				).to.be.true;
				done();
			});
		});
	});
});
