//Tipos de Funciones en javascript
//Funciones declaradas  se carga antes de otro codigo se va a usar antes de haberla declarado
//saluda("Pepe");
//Declaracion de funciones
function saluda(name){
	console.log("Hola" + name);
	
}


//function expressions
var despide = function(name){
	console.log("Adios" + name);
};
despide("Alejandro");
