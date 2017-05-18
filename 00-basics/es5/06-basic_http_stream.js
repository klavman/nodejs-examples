'use strict';

var http = require('http');
var fs = require('fs');

var index = fs.createReadStream('../statics/index.html');
var headers = { 'Content-type': 'text/html' };

http.createServer(function (request, response) {
	response.writeHead(200, headers);
	index.pipe(response);
}).listen(3000);

console.log('Server running http://127.0.0.1:3000');