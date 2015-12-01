// Iniciando servidor HTTP
var http = require('http').createServer(index);
var io = require('socket.io').listen(http);
var colors = require('colors');
var fs = require('fs');
var date = new Date();
function index(req, res){
  
  fs.readFile(__dirname + '/html_dinamic/index.html', function(err, content){
    if(err){
						// Entra aqui en caso error en el sevidor
					   res.writeHead(500, {
						   'Content-Type': 'text/html'
					   });
            res.end('<h1 style="color: red;"> Error 500</h1>' + 
				'\n <h2 style="color: blue;"> Sever Error</h2> '); 
    }else if(content){		
						  res.writeHead(200, {
						   
					   });
    }
    res.end(content);
  });

};
http.listen(3000, function() {
  
  console.log("\n !!!Cargando Servidor http://127.0.0.1:3000/  "
  .green.bold + date.toLocaleString() .red.bold);			
});

// Iniciando Socket.IO
var contador = 0;
// Evento connection ocurre cuando entra un nuevo usuário.
io.on('connection', function(socket){
  // Incrementa el total de visitas del sitio.
  contador ++;
  // Envia el  total de visitas para un nuevo usuário.
  socket.emit('visitas', contador);
  // Envia el  total de visitas para los demas usuários.
  socket.broadcast.emit('visitas', contador);
    // Atualiza el total de visitas para los demas usuários.
    socket.broadcast.emit('message', contador);
  });
//});