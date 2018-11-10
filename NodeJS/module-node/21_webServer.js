const net = require('net');

// create server
let server = net.createServer();

server.on('connection', client => {
    // client: point to the client-obj, with the 'client' we can
    // send data to client.  
    // write/read steam. readable & writable

    // ============= read data
    client.on('data', chunk => {
        console.log(chunk.toString('utf8'));
    });

    // ============= write data to client 
    // in es6, we can use `` to modify multi-line syntax.
    // HTTP, html
    client.write(`HTTP/1.1 200 OK
Server: Apache
Content-Type: text/html  

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>content from server</title>
</head>
<body>
    <h1>Content from Server</h1>
    <h2>head2</h2>
</body>
</html>
`);
    client.end();
});

// ================================================================
// start to listen the port 56789
server.listen(56789, ()=>{
    console.log('server begins to listen to the port 56789.');
});
