//pprograma que lee un archivobloqueante 

//cargar un modulo nativo de node 
//que permite trabajar con archivos
//flujo de archivos

var fs = require('fs');
//leyendo el archivo
var contenido = 
    fs.readFileSync('\documentos.txt' , 'utf-8');
	console.log(contenido);
//haciendo otra operacion
console.log('!! El programa termino...!!');
	
	
	
