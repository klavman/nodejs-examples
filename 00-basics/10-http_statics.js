const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const urls = [
	{ route: '', output: '../../statics/index.html' },
	{ route: 'acerca', output: '../../statics/acerca.html' },
	{ route: 'contacto', output: '../../statics/contacto.html' }
];

http.createServer( (request, response) => {

	const headers = {'Content-type' : 'text/html'};

	const pathURL = path.basename(request.url);
	// www.loquesea.com/?id=1
	const id = url.parse(request.url, true).query.id;

	urls.forEach( (element, index) => {

		if (element.route == pathURL || id == ++index) {

			response.writeHead(200, headers);
			fs.readFile(element.output, (err, data) => {

				if (err) throw err;
				response.end(data);
				
			});
		}
	})

	if (!response.finished) {
		response.writeHead(404, headers);
		response.end('<h1>404: NOT FOUND</h1>');
	}

}).listen(3000);

console.log('Server runnig at http://127.0.0.1:3000');