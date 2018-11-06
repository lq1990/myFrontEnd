const fs = require("fs");
const path = require("path");

/*
// ===============同步读取，不建议用，会造成阻塞===================
// 读取当前文件的内容，设置了编码格式
let path = __filename;
let fileContent = fs.readFileSync(path, { 
    // readFileSync：同步的方法，读取文件时会一次性读取完毕，再玩下执行。
    encoding: "utf-8"
});

console.log(fileContent);
*/
// =================异步读取==============================
// 异步读取：主线程继续执行后续的代码，线程池的线程读取文件内容，文件内容读取成功后，调用回调函数。

let fileName = path.join(__dirname,"index.js"); // 生成绝对路径

fs.readFile("./index.js",{ // 也可以用相对路径
    encoding:"utf8"
},function (err,data) {
    console.log("文件读取over")
    if(err) {
        console.log("error:",err);
        return;
    };
    console.log(data);
});

console.log("主线程继续执行。");

// 同步、异步读取文件 都仅适用于小文件读取。
// 大文件用 流方式
