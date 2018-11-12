const http = require("http");

// 当发生了
http.createServer(function (req,res) {
    // req：监听数据。req为可读流。可读流可以调用一些方法。
    // req.on("data",function (chunk) {
        
    // });
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);

    res.write(`

<h1>hello</h1>
<h2>header2</h2>    `);

    res.end();

}).listen(58990,()=>{
    console.log("server begins to listen to port: 58990, click http://127.0.0.1:58990");
})

