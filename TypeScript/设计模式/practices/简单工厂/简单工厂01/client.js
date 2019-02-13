"use strict";
exports.__esModule = true;
var Fac_1 = require("./Fac");
/**
 * 简单工厂：
 * 只有一个具体工厂类。
 * 产品接口。
 */
var fac = new Fac_1.Fac();
fac.prodCar("A");
fac.prodCar("B");
