const fs = require("fs");
const path = require("path");

let fileName = "C:\\Users\\china\\Music\\piano.mp3";
// 创建一个可读流
let readStream = fs.createReadStream(fileName, {
    
});

// 当流的管道建立后，并打开的时候，触发open事件
readStream.on("open",function (fd) { // fd：文件句柄（window中，唯一标志编号），文件描述符
    console.log("流管道建立 and open. fd: ",fd);
});

// 当数据流过来，触发data事件
let i=0;
readStream.on("data",function (trunk) {
    console.log("i: ",i," ",trunk);
    i++;
});

// 当数据读取完毕
readStream.on("end",function () {
    console.log("read... over.");
});











