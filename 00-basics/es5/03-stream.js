'use strict';

/*

https://nodejs.org/docs/latest-v4.x/api/stream.html

*/

var path = require('path');
var fs = require('fs');

var statics_path = path.resolve(__dirname, '..', 'statics');

var readStream = fs.createReadStream(path.join(statics_path, 'names.txt'));
var writeStream = fs.createWriteStream(path.join(statics_path, 'names_copia.txt'));

readStream.pipe(writeStream);

readStream.on('data', function (chunk) {

	console.log('read %d bytes', chunk.length);
});

readStream.on('end', function () {
	console.log('finished');
});