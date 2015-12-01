// 
var http = require('http');
var fs = require('fs');
//cargando configuracion
var appConfig = require('../config/config');

var ip = appConfig.IP;
var port = appConfig.PORT;

var counter = 0;

exports.starServer = function(){
	// Crear el server 
	var myServer = http.createServer(function(req, res){
		counter++;
		console.log(" > Se pide Recurso %s", req.url);
		console.log("Visitas del Server: %s" , counter);
		//counter++;
		// 
		if (req.url === "/index" || "/"){
			//sirviendo index
			fs.readFile("./static/index.html", 
				'utf-8', function(err, content){
				if(err){
					res.writeHead(500 ,{
						"Content-Type": "text/html"
					});
					res.end("<h1>Error 500.Error del Server</h1>");
				}else{
					//Hubo error de  lectura
					res.writeHead(200 ,{
						"Content-Type": "text/html"
					});
					//Sirviendo  Html
					//
					content = content.replace("Contador", 
						counter);
					res.end(content);
				}
			});
		}else{
	//Retorno un 404	
	res.writeHead(404 ,{
						"Content-Type": "text/html"
					});
					res.end("<h1>Error 404. Recurso no encontrado</h1>");
	}
		
	});
	myServer.listen(
		port,ip, function(){
		console.log(" > Server escuchndo en http://%s%s...",
			ip,port);
	});
};