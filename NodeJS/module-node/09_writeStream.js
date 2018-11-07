const fs = require("fs");
const path = require("path");

// 用可写流，往txt中写入100个字符串
let aFile = path.join(__dirname, "a.txt");

let stream = fs.createWriteStream(aFile, {
    flags: "a"
});

stream.on("open", function (fd) {
    console.log("stream open, ", fd);
});

stream.on("close", function () {
    console.log("stream closed");
});

// 往可写流里写入数据
for (let i = 0; i < 100; i++) {
    stream.write("aicder.com \n");
}

// 调用end方法，结束可写流
stream.end("结尾");

