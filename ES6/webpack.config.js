const path = require("path");

module.exports = {
    mode: 'development', // 设置 webpack模式为 开发阶段
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve('./dist') // resolve可以把 相对路径转成绝对路径。
    }
}