'use strict';

var http = require('http');
var form = require('fs').readFileSync("../../statics/form.html");
var querystring = require('querystring');
var util = require('util');

var datastring = '';

http.createServer(function (request, response) {

	var headers = { 'Content-type': 'text/html' };

	if (request.method === 'GET') {

		response.writeHead(200, headers);
		response.end(form);
	}

	if (request.method === 'POST') {

		request.on('data', function (data) {
			datastring += data;
		}).on('end', function () {

			var dataObject = querystring.parse(datastring);
			var dataJSON = util.inspect(dataObject);

			console.log('data send POST (string): ' + datastring);
			console.log(dataObject);

			console.log('data send POST (json): ' + dataJSON);

			response.end('form send');
		});
	}
}).listen(3000);