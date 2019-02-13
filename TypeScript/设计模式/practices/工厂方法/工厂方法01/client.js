"use strict";
exports.__esModule = true;
var FacA_1 = require("./FacA");
var FacB_1 = require("./FacB");
var FacC_1 = require("./FacC");
/**
 * 工厂方法：
 * 抽象工厂类，多个具体工厂类。
 */
var fa = new FacA_1.FacA();
fa.prodCar();
var fb = new FacB_1.FacB();
fb.prodCar();
var fc = new FacC_1.FacC();
fc.prodCar();
