var request = require('request');
var assert = require('chai').assert;

describe('Google demo test for Mocha', function() {
	
	it('Google demo test for Mocha', function(done){
		request('https://www.google.co.in/',function (error,response,body) {
			assert.equal(response.statusCode,300,'Response Code is not 300');
			done();
		});
	});
});