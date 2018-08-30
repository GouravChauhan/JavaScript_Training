var request = require('request');
var myPromise = function(url) {
  return new Promise (function(resolve,reject) {
    request(url,function (error,response,body) {
      if(error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
}

myPromise('htts://www.google.co.in/')
.then(function(response) {
  console.log("Code : " + response.statusCode);
}, function(error) {
  console.log("Error: "+ error);
})