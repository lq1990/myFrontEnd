"use strict";
exports.__esModule = true;
var Context_1 = require("./Context");
var GreenState_1 = require("./GreenState");
/**
 * 多种颜色之间的切换，顺序、逆序。
 * 顺序为：红、绿、黄、蓝
 * 逆序为：蓝、黄、绿、红
 */
var ctx = new Context_1.Context();
ctx.setState(new GreenState_1.GreenState());
ctx.sx().sx().sx().sx().sx().nx().nx();
