"use strict";
exports.__esModule = true;
var Square_1 = require("./Square");
var White_1 = require("./White");
var Blue_1 = require("./Blue");
var Circle_1 = require("./Circle");
/**
 * 桥接模式：
 * 系统有多个维度的变化，将多维度分离，单独变化。脱耦。
 */
var sq = new Square_1.Square();
sq.draw(new White_1.White());
sq.draw(new Blue_1.Blue());
var c = new Circle_1.Circle();
c.draw(new Blue_1.Blue());
