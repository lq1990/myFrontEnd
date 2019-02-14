"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var Method1_1 = require("./Method1");
/**
 * 策略模式：
 * 一个接口，多个策略类实现。
 * 一个环境类，使用具体的策略
 */
var p1 = new Person_1.Person(new Method1_1.Method1());
p1.solveProblem();
