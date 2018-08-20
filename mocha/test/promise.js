var request = require('request');
var assert = require('chai').assert;
var rp=require('request-promise');
var requestData, requestResponse;

var options = {
    uri: 'https://jsonplaceholder.typicode.com/users',
    resolveWithFullResponse: true
};

describe('Promises Testing', function() {
    it('Check Status and Body',function(){
        rp(options)
        
            .then(function(response)
            {
                //console.log("Response Code is - " + response.statusCode );
                assert.equal(response.statusCode,200,'Response Code is not 200'); 
                return(response);
            })
            .then(function(response)
            {
                //console.log(response.body);
                requestData = response.body;
                for (i=0;i<requestData.length;i++)
                {
                    if(requestData[i].username=="Samantha")
                        assert.equal(requestData[i].email,"Nathan@yesenia.net","Samantha mail is not 'Nathan@yesenia.net'");
                }
            })
               
    });
	
});