
const fs = require("fs");

// 启动监听文件夹，监听的是 __dirname：D:\myGithub\myFrontEnd\NodeJS\module-node
let watcher = fs.watch(__dirname, function (eventType, filename) {
    console.log(__dirname);
    console.log(eventType, filename);
});

// ==============通过事件的方式进行监听=====================
// 监听改变的事件
// watcher.on("change",function (eventType, filename) {
//     console.log(eventType, filename)
// });

// ==================== 关闭监听 =================
setTimeout(function () {
    // 关闭监听
    watcher.close()
},100000);






