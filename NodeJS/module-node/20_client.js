const net = require("net");

// clent：客户端连接服务器端的对象
let client = net.connect(58888, "127.0.0.1", ()=>{
    console.log("已经连接上了服务器端");
});

client.on("data", chunk => {
    console.log(chunk.toString("utf8"));
});

// 向server发送的数据
client.write("我是那谁，数据更新了，from客户端");

client.end();
