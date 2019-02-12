"use strict";
exports.__esModule = true;
var Context_1 = require("./Context");
var YellowState_1 = require("./YellowState");
/**
 * 实现颜色的切换。
 * 顺序：红绿黄蓝
 * 逆序：蓝黄绿红
 */
var ctx = new Context_1.Context();
ctx.setState(new YellowState_1.YellowState());
ctx.sx().sx().sx().nx();
