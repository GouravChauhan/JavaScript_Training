var request = require('request');
var myCallback = function(url,cb) {
  request(url, function (error, response, body) {
    cb(error, response, body);
  });
}

cb = function(error, response, body) {
  console.log(response.statusCode);
  console.log(response.body);
}

myCallback('https://www.google.co.in/',cb);