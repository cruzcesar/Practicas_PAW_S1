var fs =require('fs');
//lectura  no bloqueante o asincrona
fs.readFile("\documentos.txt" , 'utf-8', function(err,data){
	
	if (err) {
		console.log("!!Error al leer el archivo!!");
		return;
	}
	console.log(data);
});

console.log('\n !!Termino el programa....!!');
