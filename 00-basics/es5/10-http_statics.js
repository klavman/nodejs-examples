'use strict';

var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var urls = [{ id: 1, route: '', output: '../../statics/index.html' }, { id: 2, route: 'acerca', output: '../../statics/acerca.html' }, { id: 3, route: 'contacto', output: '../../statics/contacto.html' }];

http.createServer(function (request, response) {

	var headers = { 'Content-type': 'text/html' };

	var pathURL = path.basename(request.url);
	var id = url.parse(request.url, true).query.id;

	var urlsIterator = urls[Symbol.iterator]();

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = urlsIterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var element = _step.value;


			if (element.route == pathURL || element.id == id) {

				response.writeHead(200, headers);
				fs.readFile(element.output, function (err, data) {

					if (err) throw err;
					response.end(data);
					console.log(response.finished);
				});
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}).listen(3000);

console.log('Server runnig at http://127.0.0.1:3000');