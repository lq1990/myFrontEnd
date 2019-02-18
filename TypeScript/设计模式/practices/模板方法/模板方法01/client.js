"use strict";
exports.__esModule = true;
var Football_1 = require("./Football");
var Basketball_1 = require("./Basketball");
/**
 * 模板方法：
 * 封装不变部分，扩展可变部分。
 */
var s = new Football_1.Football();
s.play();
s = new Basketball_1.Basketball();
s.play();
