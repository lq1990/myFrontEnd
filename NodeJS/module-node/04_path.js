// 引入path模块
const path = require("path");

var strPath1 = "/home/aicoder/com/index.html";
var strPath2 = "c:\\aicoder\\com\\index2.html";
console.log(path.basename(strPath1)); // indx.html
console.log(path.basename(strPath2)); // index2.html

console.log(path.basename(strPath1,".html")); // index


console.log(path.delimiter);
console.log(path.posix.delimiter);
console.log(path.win32.delimiter);

console.log(path.dirname(strPath2));

console.log(__filename);
console.log(path.dirname(__filename));

console.log(path.extname("a.html")); // .html

console.log(path.join("/","home/ai","index.html")); //   \home\ai\index.html

console.dir(path.parse(strPath1));
