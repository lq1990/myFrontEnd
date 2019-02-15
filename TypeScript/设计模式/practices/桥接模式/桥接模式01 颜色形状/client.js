"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var White_1 = require("./White");
var Blue_1 = require("./Blue");
var Square_1 = require("./Square");
/**
 * 桥接模式：
 * 系统可能有多角度变化，将多角度分离出来，使其独立变化。
 */
var c = new Circle_1.Circle();
c.draw(new White_1.White());
c.draw(new Blue_1.Blue());
var s = new Square_1.Square();
s.draw(new Blue_1.Blue());
