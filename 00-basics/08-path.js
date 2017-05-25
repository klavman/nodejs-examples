const http = require('http');
const path = require('path');

const urls = [
	{ route : '', output : '<h2>Home</h2>'},
	{ route : 'acerca', output : '<h2>Acerca</h2>'},
	{ route : 'contacto', output : '<h2>Contacto</h2>'}
];

http.createServer((request, response) => {

	const headers = {'Content-type' : 'text/html'};
	const message = '<h1>Hi! Web with NODEJS</h1>';
	const pathURL = path.basename(request.url);

	console.log(`pathURL: ${pathURL}`);

	urls.forEach( (element, index) => {

		console.log(`element: ${element}`);
		console.log(`index: ${index}`);
		
		if (element.route == pathURL) {

			response.writeHead(200, headers);
			response.end(message + element.output);

		}
	});


}).listen(3000);

console.log('Server runnig at http://127.0.0.1:3000');