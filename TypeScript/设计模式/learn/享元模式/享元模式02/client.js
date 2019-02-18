"use strict";
exports.__esModule = true;
var FlyweightFac_1 = require("./FlyweightFac");
/**
 * 享元模式
 *
 */
var fac = new FlyweightFac_1.FlyweightFac();
var fly1;
var fly2;
var fly3;
var fly4;
var fly5;
var fly6;
fly1 = fac.getFlyweight("google");
fly2 = fac.getFlyweight("qutr");
fly3 = fac.getFlyweight("baidu");
fly4 = fac.getFlyweight("google");
fly5 = fac.getFlyweight("google");
fly6 = fac.getFlyweight("google");
fly1.operation();
fly2.operation();
fly3.operation();
fly4.operation();
fly5.operation();
fly6.operation();
var objInfo = fac.getFlyweightInfo();
console.log(objInfo);
