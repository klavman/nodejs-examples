'use strict';

var http = require('http');
var util = require('util');
var formidable = require('formidable');
var fs = require('fs-extra');

http.createServer(function (request, response) {

	if (request.url == '/upload' && request.method.toLowerCase() == 'post') {

		var form = new formidable.IncomingForm();
		form.parse(request, function (err, fields, files) {

			response.writeHead(200, { 'Content-type': 'text/html' });
			response.write('<h1>Files received</h1> ' + util.inspect({
				files: files }));
			response.end();
		}).on('progress', function (bytesReceived, bytesExpected) {
			var percentComplete = bytesReceived / bytesExpected * 100;
			console.log(percentComplete.toFixed(2));
		}).on('error', function (err) {
			console.log(err);
		}).on('end', function (fields, files) {

			console.log(this);
			var tempPath = this.openedFiles[0].path;
			var fileName = this.openedFiles[0].name;
			var newLocation = './upload/';

			fs.copy(tempPath, newLocation + fileName, function (err) {

				return err ? console.err(err) : console.log('success');
			});
		});

		return;
	}

	response.writeHead(200, { 'Content-type': 'text/html' });
	response.end('<form action="/upload" enctype="multipart/form-data" method="post">\n\t\t\t<div><input type="file" name="upload"></div>\n\t\t\t<div><input type="submit" value="Subir"></div>\n\t\t</form>');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');