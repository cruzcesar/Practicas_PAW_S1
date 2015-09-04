//la variable process
//mepermite acceder
//a los argumentos que son pasados
//a un programa de Node
//desde Linea de comando

console.log("Los argumentos pasados " +
	 "desde la linea de comandos son:" +
	  process.argv);
	  //
	  console.log("El tipo de dato de " +
		  "process.argv es:" +
		  typeof(process.argv));
console.log("el primer elementos del " +
	"vector de argumentos es " 
	+ process.argv[0]);
	
	console.log("El tipo de dato de " +
		  "process.argv es:" +
		  typeof(process.argv));
console.log("el segundo elementos del " +
	"vector de argumentos es " 
	+ process.argv[1]);
	
	