const http = require('http');
const form = require('fs').readFileSync("../../statics/form.html");
const querystring = require('querystring');
const util = require('util');

var datastring = '';


http.createServer((request, response) => {

	const headers = {'Content-type':'text/html'};

	if (request.method === 'GET') {

		response.writeHead(200, headers);
		response.end(form);

	}

	if (request.method === 'POST') {

		request

			.on('data', (data) => {
				datastring += data;
			})

			.on('end', () => {

				const dataObject = querystring.parse(datastring);
				const dataJSON = util.inspect(dataObject);

				console.log(`data send POST (string): ${datastring}`);
				console.log(dataObject);
				
				console.log(`data send POST (json): ${dataJSON}`);

				response.end('form send');
			});

	}

}).listen(3000);