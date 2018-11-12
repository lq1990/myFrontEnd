/*
 * @Author: lq 
 * @Date: 2018-11-12 10:53:56 
 * @Last Modified by: lq
 * @Last Modified time: 2018-11-12 13:02:57
 */

/*
// 用http模块创建一个web服务器端
const http = require("http");
const path = require("path");
const fs = require("fs");

// 创建一个http的server
let server = http.createServer();

// 监听client的请求数据和发送响应报文
server.on("request", (req, res) => {
    // req: 请求报文的封装
    // console.log("req.headers: ",req.headers);
    console.log("req.url: ",req.url);
    // console.log("req.method: ",req.method); // 打印请求的方法 get post

    // 设置响应文件的类型和状态码
    let conType = "text/plain";

    let filename = path.join(__dirname, "./dist/", req.url);

    
    switch (path.extname(filename)) {
        case ".png":
            conType = "image/png";
            break;
        case ".jpg":
        case ".jpeg":
            conType = "image/jpeg";
            break;
        case ".gif":
            conType = "image/gif";
            break;
        case ".html":
            conType = "text/html";
            break;
        case ".css":
            conType = "text/css";
            break;
        // case ".js":
        //     conType = "text/js";
        //     break;
        default:
            conType = "text/plain";
    }

    res.writeHeader(200, {
        "Content-Type": conType
    });

    // url: 全路径
    let reader = fs.createReadStream(filename);
    reader.pipe(res);



    // // res：响应 的封装
    // res.write("res.write. from server.");
    // res.end();

});

// server开始监听client
server.listen(56789, () => {
    console.log("server begins to listen to the port: 56789, use browser to open: http://127.0.0.1:56789");
})
*/


// ============= once more practice =================
const http = require("http");
const fs = require("fs");
const path = require("path");

let server = http.createServer();

server.on("request",(req,res)=>{
    let fileName = path.join(__dirname,"/dist/",req.url);

    let contype = "text/plain";
    switch(path.extname(fileName)){
        case ".html":
            contype = "text/html";
            break;
        case ".jpg":
        case ".jpeg":
            contype = "image/jpg";
            break;
        case ".css":
            contype = "text/css";
            break;
        
    }

    res.writeHeader(200,{
        "Content-Type":contype
    });

    let reader = fs.createReadStream(fileName);
    reader.pipe(res);

});

server.listen("56788",()=>{
    console.log("listen to port: 56788, click http://127.0.0.1:56788");
})
