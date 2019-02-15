"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Yellow_1 = require("./Yellow");
var White_1 = require("./White");
var Square_1 = require("./Square");
/**
 * 桥接模式 bridge
 * 系统可能有多维度变化，将多维度 分离出来，脱耦。
 */
var circle = new Circle_1.Circle();
circle.draw(new Yellow_1.Yellow());
circle.draw(new White_1.White());
var s = new Square_1.Square();
s.draw(new White_1.White());
