const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const urls = [
	{ id: 1, route: '', output: '../../statics/index.html' },
	{ id: 2, route: 'acerca', output: '../../statics/acerca.html' },
	{ id: 3, route: 'contacto', output: '../../statics/contacto.html' }
];

http.createServer((request, response) => {

	const headers = {'Content-type' : 'text/html'};

	const pathURL = path.basename(request.url);
	const id = url.parse(request.url, true).query.id;


	const urlsIterator = urls[Symbol.iterator]();

	for (var element of urlsIterator) {


		if (element.route == pathURL || element.id == id) {

			response.writeHead(200, headers);
			fs.readFile(element.output, (err, data) => {

				if (err) throw err;
				response.end(data);
				console.log(response.finished);
				
			});
		}		
		
	}

}).listen(3000);

console.log('Server runnig at http://127.0.0.1:3000');