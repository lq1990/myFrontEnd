"use strict";
exports.__esModule = true;
var Context_1 = require("./Context");
var State_1 = require("./State");
var ctx = new Context_1.Context();
// 实例出具体状态
var red = new State_1.State("red");
var green = new State_1.State("green");
var yellow = new State_1.State("yellow");
// 绿灯亮
green.handle(ctx);
console.log(ctx.getState());
// 红灯亮
// red.handle(ctx);
// console.log(ctx.getState());
// // 黄灯亮
// yellow.handle(ctx);
// console.log(ctx.getState());
