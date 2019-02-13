"use strict";
exports.__esModule = true;
var FacA_1 = require("./FacA");
var FacB_1 = require("./FacB");
/**
 * 抽象工厂。
 * 使客户端在不必指定产品的具体情况下，创建多个产品族中的产品对象。
 */
var fa = new FacA_1.FacA();
fa.prodAircon();
fa.prodEngine();
var fb = new FacB_1.FacB();
fb.prodAircon();
fb.prodEngine();
