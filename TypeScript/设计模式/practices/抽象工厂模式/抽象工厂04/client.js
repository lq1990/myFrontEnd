"use strict";
exports.__esModule = true;
var FacA_1 = require("./FacA");
var FacB_1 = require("./FacB");
var FacC_1 = require("./FacC");
/**
 * 抽象工厂：
 * 多个抽象产品类，一个抽象工厂类，
 * 多个具体工厂，每个工厂都生产多个产品。
 */
var fa = new FacA_1.FacA();
fa.prodCar();
fa.prodTire();
var fb = new FacB_1.FacB();
fb.prodCar();
fb.prodTire();
var fc = new FacC_1.FacC();
fc.prodCar();
fc.prodTire();
