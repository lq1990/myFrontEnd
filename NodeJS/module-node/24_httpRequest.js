const http = require("http");

// 发送一个get请求
// http.get("http://aicoder.com", res => {
//     res.on("data", trunk => console.log(trunk.toString("utf8")));
// });


// post 通用的httpRequest对象发送请求
let req = http.request({
    protocol: "http:", // 协议
    host: "baidu.com", // 
    port: 80,
    method:"GET",
    timeout: 2000, // 超出时间
    path:"/" // 请求路径
}, res => {
    res.on("data", trunk=>console.log(trunk.toString("utf8")));
})

req.end(); // 这是真正的发送请求

