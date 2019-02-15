"use strict";
exports.__esModule = true;
var White_1 = require("./White");
var Square_1 = require("./Square");
var Rectangle_1 = require("./Rectangle");
/**
 * 桥接模式：
 * 系统可能有多个角度分类，每一种角度都可能变化，
 * 把多角度分离出来，让他们独立变化。脱耦。
 */
var white = new White_1.White();
var square = new Square_1.Square();
square.setColor(white);
square.draw();
var rect = new Rectangle_1.Rectangle();
rect.setColor(white);
rect.draw();
