// node indexq 10,10

//obtener el argumento

var numeros = process.argv[2];
//console.log(typeof (numeros));
numeros = numeros.split(',');
// va a generar un arreglo en donde cada elementos sera numero
var suma = 0;
for (var index = 0; index < numeros.length; index++) {
	suma +=parseInt(numeros[index]);
}
console.log(suma);