// C S 端分开写。
// 这次S

const net = require("net");

// 创建服务器端。TCP服务器端
let server = net.createServer();

server.on("connection", client => {
    // client指向客户端的一个对象，可以通过他给客户端发送数据，可写流，可读流

    client.on("data", chunk => {
        console.log(chunk.toString("utf8"));
    });

    // 往客户端写入数据
    client.write("你好，来自服务器端。");
    client.end("disconn.");
});

// 开始监听端口
server.listen(58888)


/*
// 监听异常错误事件
server.on("error", err => {
    console.log(err);
});

// 监听客户端的连接事件，客户端连接上后，会自动执行回调函数，
// 回调函数的参数就是指向客户端的socket
server.on("connection", clientSocket => {
    console.log("客户端：%s", clientSocket.remoteAddress);

    // 监听此客户端的end事件
    clientSocket.on("end", () => {
        console.log("client disconnected");
    });

    // 监听此客户端发送数据的事件
    clientSocket.on("data", data => {
        console.log("收到数据：%s",data);
    });

    // 向客户端发送数据
    clientSocket.write("Hi, client. I'm data from server.");

    // 2s后让客户端退出
    setTimeout(() => {
        clientSocket.end("bye!");
    }, 2000);

    // 服务器开始监听60003端口
    server.listen(60003,()=> {
        console.log("opened server on", server.address());
    });


})
*/

