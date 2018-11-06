const fs = require("fs");
const path = require("path");

let aFilePath = path.join(__dirname,"a.txt");

// 异步写入。传3个参数。第三个是回调函数。
// fs.writeFile(aFilePath,"你好啊",function (err) {
//     if(err) {
//         console.log("error.")
//         return;
//     }
//     console.log("right.")
// });

// 同步写入
fs.writeFileSync(aFilePath,"nihao2",{
    flag:"a", // append方式
});




