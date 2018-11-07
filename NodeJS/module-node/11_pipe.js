const fs = require("fs");
const path = require("path");

let srcFile = "C:/Users/china/Music/piano.mp3";
let distFile = path.join(__dirname,"piano_pipe.mp3");

let rs = fs.createReadStream(srcFile);
let ws = fs.createWriteStream(distFile);

rs.on("end",function () {
    console.log("read end");
});

ws.on("finish",function () {
    console.log("write finish");
})

// 读与写 之间建立管道
rs.pipe(ws);


