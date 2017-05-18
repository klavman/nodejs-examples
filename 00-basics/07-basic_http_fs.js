const http = require('http');
const fs = require('fs');
const path = require('path');

const PATH_APP = path.join(__dirname);
const headers = {'Content-type':'text/html'};

console.log(PATH_APP);

http.createServer((request, response) => {
	response.writeHead(200, headers);

	fs.readFile('../../statics/index.html', (err, data) => {
		
		if (err) throw err;
		response.end(data);
	});


}).listen(3000);


console.log('Server running http://127.0.0.1:3000');