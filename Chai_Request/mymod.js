var request = require("request");
var assert = require('chai').assert;
function checkstatus(url,expectedStatusCode){
	request(url,function (error,response,body) {
  assert.equal(response.statusCode,expectedStatusCode,'Response Code is not 300');
});
}

module.exports = checkstatus;