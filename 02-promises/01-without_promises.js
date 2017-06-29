const fs = require('fs');

const path_statics = "../../statics/names.txt";
const path_statics_dest = "../../statics/names_cp.txt";

fs.exists(path_statics, (exists) => {

	if (exists) {
		console.log("existe el archivo");
		fs.readFile(path_statics, (err, data) => {
			if (err) {
				console.log("no puede leer el archivo");
			} else {
				console.log("archivo leido");
				fs.writeFile(path_statics_dest, data, (err) => {
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