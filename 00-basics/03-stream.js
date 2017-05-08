/*

https://nodejs.org/docs/latest-v4.x/api/stream.html

*/

const path = require('path');
const fs = require('fs');

const statics_path = path.resolve(__dirname, '..', 'statics');

var readStream = fs.createReadStream(path.join(statics_path, 'names.txt'));
var writeStream = fs.createWriteStream(path.join(statics_path, 'names_copia.txt'));

readStream.pipe(writeStream);

readStream.on('data', (chunk) => {

	console.log('read %d bytes', chunk.length);

});

readStream.on('end', () => {
	console.log('finished');
});
