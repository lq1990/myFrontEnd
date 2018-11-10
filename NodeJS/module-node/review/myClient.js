const net = require('net');
let client = net.connect(56789, '127.0.0.1', () => {
    console.log('client connects to server successfully.');

});

client.on('data', chunk => {
    console.log(chunk.toString('utf8'));
});

client.write('hi, from client');

client.end();