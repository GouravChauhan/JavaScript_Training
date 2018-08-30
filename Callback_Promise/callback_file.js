var assert = require('chai').assert;
var request = require('request');
var fs = require('fs');

var myRequestFunc = function(url1, url2, cb){
  request(url1, function (error1, response1, body1) {
    request(url2, function (error2, response2, body2) {
        //console.log(response1.statusCode);
        //console.log(response2.statusCode);
        cb(response1.statusCode, response2.statusCode);  
      });   
  });
}

cb = function(statusCode1, statusCode2) {
  if(statusCode1 == statusCode2) {
    result = true;
  } else {
    result=false;
  }
  //console.log("Writing File : ",result);
  fs.writeFile('Callback.txt', result, function (err) {
    if(err){
      throw err;
    }
  });
}

myRequestFunc('https://www.google.co.in/', 'https://www.yahoo.com/', cb);