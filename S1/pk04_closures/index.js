//haciendo un closure

function retornafuncionsaluda(){
var mensaje = "Hola erick";	
return function(){
	console.log(mensaje);
    }
}
var saludar = retornafuncionsaluda();
saludar();
