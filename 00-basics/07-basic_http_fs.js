const http = require('http');
const fs = require('fs');

const headers = {'Content-type':'text/html'};

http.createServer((request, response) => {
	
	response.writeHead(200, headers);
	fs.readFile('../../statics/index.html', (err, data) => {
		
		if (err) throw err;
		response.end(data);
	});


}).listen(3000);


console.log('Server running http://127.0.0.1:3000');