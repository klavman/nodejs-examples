const http = require('http');

const options = {

	host : 'carteleracordoba.com',
	port : 80,
	path : '/'

};

var htmlCode = "";


// Client

http
	.get(options, (response) => {
		
		console.log(`status: ${response.statusCode}`);

		response.on('data', (data) => {
			console.log(data);
			htmlCode += data;
		});
		

	})

	.on('error', (err) => {

		console.log(`Error found: ${err.message}`);

	});


// Server

http.createServer((request, response) => {

	response.writeHead(200, {'Content-type' : 'text/html'});
	response.end(htmlCode);

}).listen(3000);