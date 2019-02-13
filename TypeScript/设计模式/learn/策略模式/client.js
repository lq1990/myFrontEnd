"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var Plane_1 = require("./Plane");
/**
 * 策略模式
 * 一个系统需要动态地在几种算法中选择一种。
 */
var p = new Person_1.Person(new Plane_1.Plane());
p.takeHoliday();
