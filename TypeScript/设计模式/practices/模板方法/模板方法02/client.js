"use strict";
exports.__esModule = true;
var Football_1 = require("./Football");
var Basketball_1 = require("./Basketball");
/**
 * 模板方法：
 * 封装不变的，扩展可变的。
 */
var g = new Football_1.Football();
g.play();
g = new Basketball_1.Basketball();
g.play();
