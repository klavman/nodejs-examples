const http = require('http');
const util = require('util');
const formidable = require('formidable');
const fs = require('fs-extra');

http.createServer((request, response) => {



	if (request.url == '/upload' && 
		request.method.toLowerCase() == 'post') {

		var form = new formidable.IncomingForm();
		form
			.parse(request, (err, fields, files) => {

				response.writeHead(200, {'Content-type':'text/html'});
				response.write(`<h1>Files received</h1> ${util.inspect({
					files:files})}`);
				response.end();

			})
			.on('progress', (bytesReceived, bytesExpected) => {
				var percentComplete = (bytesReceived / bytesExpected) * 100;
				console.log(percentComplete.toFixed(2));

			})
			.on('error', (err) => {
				console.log(err);
			})
			.on('end', function (fields, files) {

				console.log(this);
				var tempPath = this.openedFiles[0].path;
				var fileName = this.openedFiles[0].name;
				var newLocation = './upload/';

				fs.copy(tempPath, newLocation + fileName, (err) => {

				 return (err) ? console.err(err) : console.log('success');

				});


			});


		return;


	}

	response.writeHead(200, {'Content-type':'text/html'});
	response.end(
		`<form action="/upload" enctype="multipart/form-data" method="post">
			<div><input type="file" name="upload"></div>
			<div><input type="submit" value="Subir"></div>
		</form>`
	);



}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');