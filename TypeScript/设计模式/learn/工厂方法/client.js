"use strict";
exports.__esModule = true;
var FacA_1 = require("./FacA");
var FacB_1 = require("./FacB");
/**
 * 为了解决【简单工厂】中违背 开闭原则的问题，
 * 使用工厂方法模式。
 * 建立 抽象工厂类
 */
var fa = new FacA_1.FacA();
fa.createCar();
var fb = new FacB_1.FacB();
fb.createCar();
