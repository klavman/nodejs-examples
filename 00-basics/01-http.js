/*

https://nodejs.org/docs/latest-v5.x/api/http.html#http_http

*/

const http = require("http");


http

	.createServer( (request, response) => {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<h1>Web server with Node.JS</h1>");
		response.end();

	})

	.listen(3000);

console.log("running server http://127.0.0.1:3000/");