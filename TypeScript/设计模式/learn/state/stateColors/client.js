"use strict";
exports.__esModule = true;
var Context_1 = require("./Context");
var BlueState_1 = require("./BlueState");
var ctx = new Context_1.Context();
ctx.setState(new BlueState_1.BlueState());
ctx.push().push().pull().push();
// let blues = new BlueState(); 
// 对于blue这个颜色状态，在handlepush,handlepull 两种切换中，会切换到不同的颜色
// console.log(blues.getcolor());
// blues.handlepull(ctx);
// blues.handlepush(ctx);
