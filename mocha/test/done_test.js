var request = require('request');
var assert = require('chai').assert;
var requestData, requestResponse;
describe('Done Test ', function() {
	it('Test1', function(){
		console.log("Test 1 ");
		console.log("Test 123 ");
		request('https://www.google.co.in/',function (error,response,body) {
			
			console.log("Test 1 - " + response.statusCode);
			console.log("Test 1234");
			//console.log(body);
		});
		console.log("Test 1234b");
		request('https://www.google.com/',function (error,response1,body) {
			
			console.log("Test 1a - " + response1.statusCode);
			console.log("Test 1234a");
			//console.log(body);
		});
	});

	it('Test2', function(done){
		request('https://www.yahoo.com/',function (error,response,body) {
			console.log("Test 2");
			console.log("Test 2 - " + response.statusCode);
			//console.log(body);
			done();
			console.log("Test 2 after done- " + response.statusCode);
		});
	});
	console.log("Test 3 outside ");


	it('Test3', function(done){
		request('https://www.rediff.com/',function (error,response,body) {
			console.log("Test 3");
			console.log("Test 3 - " + response.statusCode);
			//console.log(body);
			done();
		});
	});
});