var http = require("http");

var server = http.createServer((req, res) => {
    console.log("request received");
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    // res.write("hello, from out app.");
    res.end("hello");
})

server.listen(3000);
console.log("http://127.0.0.1:3000");