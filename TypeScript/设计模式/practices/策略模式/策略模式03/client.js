"use strict";
exports.__esModule = true;
var Context_1 = require("./Context");
var Shell_1 = require("./Shell");
/**
 * 策略模式：
 * 一个抽象策略类或接口，多个策略类实现。
 * 一个环境类，使用策略
 */
var ctx = new Context_1.Context(new Shell_1.Shell());
ctx["do"]();
