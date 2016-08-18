"use strict";

const expect = require("chai").expect;
const request = require('request');
const shortid = require('shortid');
const faker = require("Faker");

const config = require('../custom_modules/config/config.js');

describe("API TEST PROCESS > ", function() {
	// initialize project
	describe("Initializes project > ", function() {
		let url = config.domain + '/apis/initializeMe';
		it("returns status 200", function(done) {
			request(url, function(err, res, body) {
				expect(res.statusCode).to.equal(200);
				expect(err).to.equal(null);
				done();
			});
		});
		it("response is array", function(done) {
			request(url, function(err, res, body) {
				expect(err).to.equal(null);
				expect(
					Object.prototype.toString.call(JSON.parse(body)) === '[object Array]'
				).to.be.true;
				done();
			});
		});
	});

	// Adds new project
	describe("Adds new project > ", function() {
		let url = config.domain + '/apis/initializeMe';
		it("Saves good data >", function(done) {
			request.post(url,{
				id: shortid.generate(),
				name: faker.Company.companyName(),
				isPublished: false,
				authors:[{
					id: "57aecf658807c42710307d58",
					name: "vaju"
				}]
			}, function(err, res, body) {
				expect(res.statusCode).to.equal(200);
				expect(err).to.equal(null);
				done();
			});
		});
		it("response is array", function(done) {
			request(url, function(err, res, body) {
				expect(err).to.equal(null);
				expect(
					Object.prototype.toString.call(JSON.parse(body)) === '[object Array]'
				).to.be.true;
				done();
			});
		});
	});

});
