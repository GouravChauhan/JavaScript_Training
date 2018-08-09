var request = require('request');
var assert = require('chai').assert;
var requestData, requestResponse;
describe('Assignment 2 for Mocha', function() {
	before(function(done){
	   request(' https://jsonplaceholder.typicode.com/users',function (error,response,body) {
            requestResponse=response.statusCode;
            /*console.log(response.headers);
             console.log(response.headers['content-type']) ;

             */
            
            requestData = JSON.parse(body);
            done();	   
	   });       
    });

    it('Status Check', function(done){
        //console.log( requestResponse);
        assert.equal(requestResponse,200,'Response Code is not 200');   
        done();
    });

	it('Username and Email check', function(done){
        console.log(requestData1);
        for (i=0;i<requestData.length;i++){
            if(requestData[i].username=="Samantha")
                assert.equal(requestData[i].email,"Nathan@yesenia.net","Samantha mail is not 'Nathan@yesenia.net'");
        }

        done();
	});
});