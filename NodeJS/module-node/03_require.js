/*
// ============= 第一种：引用nodejs内置的模块 ===============
// 内置模块
const path = require("path"); // path模块提供了一些工具函数，用于处理文件与目录的路径。
// const：定义一个常量，如果是简单类型，值不能修改。若使引用类型，指针不变。
var t= path.join(__dirname, __filename); // join 可把多个路径连接在一块。

console.log(t);

// ===============第二种：引入文件模块==================
// 文件后缀可加可不加，推荐加后缀，效率高。若不加，会自动尝试 .js .node .json
const math = require("./02_math.js");
console.log(math.add(9,5));

// ================第三种：引入文件夹模块。不建议用================================
// 1. 首先到根目录的package.json文件中去找main的配置节点
const m = require("./");
m.show();
const n=require("../tm");
n.myShow();
*/
// ================第四种：自定义模块==========================
const stringW = require("string-width");
var num = stringW("我是lq");
console.log(num);
// console.log(module);
console.log(module.paths); // 自动寻址。
// 可把第三方模块放到上级目录。





