'use strict';

var http = require('http');
var path = require('path');

var urls = [{ route: '', output: '<h2>Home</h2>' }, { route: 'acerca', output: '<h2>Acerca</h2>' }, { route: 'contacto', output: '<h2>Contacto</h2>' }];

http.createServer(function (request, response) {

	var headers = { 'Content-type': 'text/html' };
	var message = '<h1>Hi! Web with NODEJS</h1>';
	var pathURL = path.basename(request.url);

	console.log('pathURL: ' + pathURL);

	urls.forEach(function (element, index) {

		if (element.route == pathURL) {

			response.writeHead(200, headers);
			response.end(message + element.output);
		}
	});

	if (!response.finished) {
		response.writeHead(404, headers);
		response.end('<h1>Error 404: NOT FOUND</h1>');
	}
}).listen(3000);

console.log('Server runnig at http://127.0.0.1:3000');