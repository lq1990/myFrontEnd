const net = require('net');
let server = net.createServer();
server.on('connection', client => {
    client.on('data', chunk=> {
        console.log(chunk.toString());
    });

    client.write('hi, from server.');
    client.end();
});

server.listen(56789);
