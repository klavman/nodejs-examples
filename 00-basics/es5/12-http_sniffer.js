'use strict';

var http = require('http');

var options = {

	host: 'carteleracordoba.com',
	port: 80,
	path: '/'

};

var htmlCode = "";

// Client

http.get(options, function (response) {

	console.log('status: ' + response.statusCode);

	response.on('data', function (data) {
		console.log(data);
		htmlCode += data;
	});
}).on('error', function (err) {

	console.log('Error found: ' + err.message);
});

// Server

http.createServer(function (request, response) {

	response.writeHead(200, { 'Content-type': 'text/html' });
	response.end(htmlCode);
}).listen(3000);