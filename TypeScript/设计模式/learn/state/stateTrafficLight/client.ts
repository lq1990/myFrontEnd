import { Context } from "./Context";
import { State } from "./State";

const ctx = new Context();

// 实例出具体状态
const red = new State("red");
const green = new State("green");
const yellow = new State("yellow");

// 绿灯亮
green.handle(ctx);
console.log(ctx.getState());

// 红灯亮
// red.handle(ctx);
// console.log(ctx.getState());

// // 黄灯亮
// yellow.handle(ctx);
// console.log(ctx.getState());

