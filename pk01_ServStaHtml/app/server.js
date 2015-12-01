//cargar modulo de http
var http = require('http');
var colors = require('colors');
// cargar modulos de lectura
//archivos
var fs = require ('fs');
//se carga la configuracion
var appConfig = require('../config/config');
var ip = appConfig.IP;
var port =  appConfig.PORT;
// se crea el server

exports.startServer = function(){
	var server = http.createServer(function(req, res){
			var date = new Date();
		if(req.url == '/' || req.url == '/index.html'){
			// Servir index.html
			// Leyendo html
			    fs.readFile('static/index.html',
				'utf-8', function(err, content){
					//creo cabecera http respuesta	
					if(err){
						// Entra aqui en caso error
					   res.writeHead(500, {
						   'Content-Type': 'text/html'
					   });
				res.end('<h1 style="color: red;"> Error 500</h1>' + 
				'\n <h2 style="color: blue;"> Sever Error</h2> ');
					}else if(content) {
			              console.log(" !!! Sirvi HTML !!! ".magenta.bold + date.toLocaleString() .red.bold);			
						  res.writeHead(200, {
						   'Content-Type': 'text/html'
					   });
					   res.end(content);
					}
				});
		}else{
			 res.writeHead(200, {
						   'Content-Type': 'text/html'
	 				   });
			   /*
			// Servir 404
			res.writeHead(404, {
				'Content-Type': "text/html",
				'Server': 'Halcon@1.0.0'
			});
			//Respindemos
			res.end('<h1 style="color: red;"> Error 404</h1>' + 
				'\n <h2 style="color: blue;"> Not Found </h2> ');
			 */
			res.end();	 
		}
	}); 
server.listen(port,ip,function(){
	console.log(
	'\n>Servidor escuchuando en http://%s:%s \n'.green.bold,
	 //ip,port
	String(ip).white.bold,
	String(port).red.bold  
	);
});	
}