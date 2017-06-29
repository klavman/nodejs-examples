const fs = require('fs');
const Q = require('q');

const path_statics = "../../statics/names.txt";
const path_statics_dest = "../../statics/names_cp.txt";

/*
Si existe el archivo
	- Leelo
	- Copialo
	- Errores
*/

function existFile (file) {

	var defer = Q.defer();
	fs.exists(file, (exists) => {
		return exists ? defer.resolve(true) : defer.reject(new Error("Archivo no existe"));

	});

	return defer.promise;
}

function readFile (file) {

	var defer = Q.defer();
	fs.readFile(path_statics, (err, data) => {	

		return err ? defer.reject(new Error("Archivo no leido")) : defer.resolve(data);

	});

	return defer.promise;

}

function writeFile (file, data) {

	var defer = Q.defer();
	fs.writeFile(path_statics, data, (err) => {	

		return err ? defer.reject(new Error("Archivo no copiado")) : defer.resolve("Archivo copiado");

	});

	return defer.promise;

}

existFile(path_statics)
	.then((datap) => {
		console.log(`ESTO ES: ${datap}`);
		return readFile(path_statics);
	})
	.then((dataPromise) => {

		return writeFile(path_statics_dest, dataPromise);

	})
	.then((dataPromise) => {

		return console.log(dataPromise);
	})	
	.fail((err) => {
		return console.log(err.message);
	});