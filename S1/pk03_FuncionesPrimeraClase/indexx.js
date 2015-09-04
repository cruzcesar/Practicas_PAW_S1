//funciones como 
// primera funcion
var funcionSaludar = function (nombre){
	
	console.log("Hola %s", nombre);
	
};
 var funcionDespide = function (nombre){
	 
	 console.log("Adios %s" , nombre);

 };
 
 // permite constuir manejadores Handlers -delegados
 //handler
 var mensaje = function (nombre, handler){
	handler(nombre); 
	 
 };
 
 //usando la funcion mensaje 
 
 mensaje("cesar" , funcionSaludar);
 