"use strict";

var fs = require('fs');

var path_statics = "../../statics/names.txt";
var path_statics_dest = "../../statics/names_cp.txt";

fs.exists(path_statics, function (exists) {

	if (exists) {
		console.log("existe el archivo");
		fs.readFile(path_statics, function (err, data) {
			if (err) {
				console.log("no puede leer el archivo");
			} else {
				console.log("archivo leido");
				fs.writeFile(path_statics_dest, data, function (err) {
					if (err) {
						console.log("no puedo copiar el archivo");
					} else {
						console.log("archivo copiado");
					}
				});
			}
		});
	} else {
		console.log("no existe archivo");
	}
});