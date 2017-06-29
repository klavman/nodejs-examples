"use strict";

var fs = require('fs');
//const Q = require('q');

var path_statics = "../../statics/names.txt";
var path_statics_dest = "../../statics/names_cp.txt";

/*
Si existe el archivo
	- Leelo
	- Copialo
	- Errores
*/

function existFile(file) {

	return new Promise(function (resolve, reject) {

		fs.exists(file, function (exists) {

			return exists ? resolve(true) : reject(new Error("Archivo no existe"));
		});
	});
}

function readFile(file) {

	return new Promise(function (resolve, reject) {

		fs.readFile(file, function (err, data) {

			return err ? reject(new Error("Archivo no leido")) : resolve(data);
		});
	});
}

function writeFile(file, data) {

	return new Promise(function (resolve, reject) {

		fs.writeFile(file, data, function (err) {

			return err ? reject(new Error("Archivo no copiado")) : resolve("Archivo copiado");
		});
	});
}

existFile(path_statics).then(function (dataPromise) {
	console.log("Existe el archivo: " + dataPromise);
	return readFile(path_statics);
}).then(function (dataPromise) {
	console.log("Archivo leído");
	return writeFile(path_statics_dest, dataPromise);
}).then(function (dataPromise) {
	console.log(dataPromise);
}).catch(function (err) {
	return console.log(err.message);
});