const http = require('http');

const options = {

	host : 'github.com',
	port : 80,
	path : '/'

};

http
	.get(options, (response) => {
		
		console.log(`status: ${response.statusCode}`);

	})

	.on('error', (err) => {

		console.log(`Error found: ${err.message}`);

	});