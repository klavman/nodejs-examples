const fs = require('fs');
//const Q = require('q');

const path_statics = "../../statics/names.txt";
const path_statics_dest = "../../statics/names_cp.txt";

/*
Si existe el archivo
	- Leelo
	- Copialo
	- Errores
*/

function existFile (file) {

	return new Promise((resolve, reject) => {

		fs.exists(file, (exists) => {

			return exists ? resolve(true) : reject(new Error("Archivo no existe"));

		});

	});


}

function readFile (file) {

	return new Promise((resolve, reject) => {
		

		fs.readFile(file, (err, data) => {	

			return err ? reject(new Error("Archivo no leido")) : resolve(data);

		});

	});



}

function writeFile (file, data) {

	return new Promise((resolve, reject) => {

		fs.writeFile(file, data, (err) => {	

			return err ? reject(new Error("Archivo no copiado")) : resolve("Archivo copiado");

		});

	});


}

existFile(path_statics)
	.then((dataPromise) => {
		console.log(`Existe el archivo: ${dataPromise}`);
		return readFile(path_statics);
	})
	.then((dataPromise) => {
		console.log("Archivo leído");
		return writeFile(path_statics_dest, dataPromise);
	})
	.then((dataPromise) => {
		console.log(dataPromise);
	})
	.catch((err) => {
		return console.log(err.message);
	});