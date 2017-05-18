const http = require('http');
const fs = require('fs');


const index = fs.createReadStream('../statics/index.html');
const headers = {'Content-type':'text/html'};


http.createServer((request, response) => {
	response.writeHead(200, headers);
	index.pipe(response);

}).listen(3000);

console.log('Server running http://127.0.0.1:3000');
