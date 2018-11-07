const fs = require("fs");
const path = require("path");


// 读取一个路径，返回路径下面的所有的文件文件夹的名字
// 异步读，通过回调函数返回文件
fs.readdir(__dirname, function(err, files) {
    // console.log(files);

    // 有文件、文件夹。区分
    files.forEach(function (val, idx) {
        fs.stat(path.join(__dirname, val), function (err,stat) {
            // console.log(stat);
            stat.isFile() ? console.log("file:", val) : console.log("dir:",val);
        });
    })
});



