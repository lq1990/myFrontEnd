"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var Bike_1 = require("./Bike");
/**
 * 策略模式：
 * 避免使用 if、else
 * 一个策略类接口，多个具体策略类。
 * 一个环境类 内有私有成员 策略。
 */
var p1 = new Person_1.Person(new Bike_1.Bike());
p1.takeAHoliday();
