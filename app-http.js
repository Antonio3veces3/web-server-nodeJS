const http = require('http');

http.createServer((req, res)=>{
    /* Colocamos parametros y configuracion en el header del response.  
    res.setHeader('Content-Disposition', 'attachment; filename=list.csv');

    res.writeHead(200, {'Content-Type': 'application/csv'})*/
    
    res.write( 'id; nombre\n' );
    res.write( '1; Tony\n' );
    res.write( '2; Ana\n' );
    res.write( '3; Erika\n' );
    res.write( '4; Alejandra\n' );
    res.end();
}).listen(8080);

console.log('Escuchando en el puerto ',8080);