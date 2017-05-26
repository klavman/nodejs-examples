'use strict';

var http = require('http');

var options = {

	host: 'github.com',
	port: 80,
	path: '/'

};

http.get(options, function (response) {

	console.log('status: ' + response.statusCode);
}).on('error', function (err) {

	console.log('Error found: ' + err.message);
});