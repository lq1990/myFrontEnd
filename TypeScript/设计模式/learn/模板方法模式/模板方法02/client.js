"use strict";
exports.__esModule = true;
var Cricket_1 = require("./Cricket");
var Football_1 = require("./Football");
/**
 * 模板方法模式：
 * 封装不变部分，扩展可变部分。
 */
var game = new Cricket_1.Cricket();
game.play();
console.log("-----------------");
game = new Football_1.Football();
game.play();
