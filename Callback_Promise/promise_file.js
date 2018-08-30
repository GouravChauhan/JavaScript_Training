var request = require('request');
var fs = require('fs');

var myRequestFunc = function(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      if(error) {
        reject(error);
      } else{
        resolve(response);
      }
    });
  });
}

myRequestFunc('https://www.google.co.in/')
.then(function(response) {
  //console.log("Code : " + response.statusCode)
  fs.writeFile('Promise.txt', response.statusCode, function (err) {
    if(err) {
      throw err;
    }
   });
  }, 
  function(error) {
    //console.log("Error: "+ error)
    fs.writeFile('Promise.txt', error, function (err) {
      if(err) {
        throw err;
      }
    });
  }
)