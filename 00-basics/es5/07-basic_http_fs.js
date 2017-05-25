'use strict';

var http = require('http');
var fs = require('fs');

var headers = { 'Content-type': 'text/html' };

http.createServer(function (request, response) {

	response.writeHead(200, headers);
	fs.readFile('../../statics/index.html', function (err, data) {

		if (err) throw err;
		response.end(data);
	});
}).listen(3000);

console.log('Server running http://127.0.0.1:3000');