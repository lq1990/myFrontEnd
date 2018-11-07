const fs = require("fs");
const path = require("path");

let srcFile = "C:/Users/china/Music/piano.mp3";
let distFile = path.join(__dirname,"piano_copy.mp3");

let rs = fs.createReadStream(srcFile);
let ws = fs.createWriteStream(distFile);

rs.on("open",function (fd) {
    console.log("open and reading...");
});

rs.on("close",function () {
    console.log("reading... over");
});

rs.on("data",function (trunk) {
    if(ws.write(trunk) === false) {
        // 缓冲区满了，让可读流暂停
        rs.pause();
    }
});

ws.on("drain",function () {
    // 当可写流 可以继续写入时，再让可读流继续读
    rs.resume();
})

