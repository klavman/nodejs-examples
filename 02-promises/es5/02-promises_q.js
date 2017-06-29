'use strict';

var fs = require('fs');
var Q = require('q');

var path_statics = "../../statics/names.txt";
var path_statics_dest = "../../statics/names_cp.txt";

/*
Si existe el archivo
	- Leelo
	- Copialo
	- Errores
*/

function existFile(file) {

	var defer = Q.defer();
	fs.exists(file, function (exists) {
		return exists ? defer.resolve(true) : defer.reject(new Error("Archivo no existe"));
	});

	return defer.promise;
}

function readFile(file) {

	var defer = Q.defer();
	fs.readFile(path_statics, function (err, data) {

		return err ? defer.reject(new Error("Archivo no leido")) : defer.resolve(data);
	});

	return defer.promise;
}

function writeFile(file, data) {

	var defer = Q.defer();
	fs.writeFile(path_statics, data, function (err) {

		return err ? defer.reject(new Error("Archivo no copiado")) : defer.resolve("Archivo copiado");
	});

	return defer.promise;
}

existFile(path_statics).then(function (datap) {
	console.log('ESTO ES: ' + datap);
	return readFile(path_statics);
}).then(function (dataPromise) {

	return writeFile(path_statics_dest, dataPromise);
}).then(function (dataPromise) {

	return console.log(dataPromise);
}).fail(function (err) {
	return console.log(err.message);
});