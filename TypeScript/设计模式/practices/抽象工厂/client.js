"use strict";
exports.__esModule = true;
var FacA_1 = require("./FacA");
var FacB_1 = require("./FacB");
/**
 * 向client提供一个接口，使client在不必指定产品的情况下，创建多个产品族中的产品对象。
 */
var fa = new FacA_1.FacA();
fa.produceEngine();
fa.produceAirCon();
var fb = new FacB_1.FacB();
fb.produceEngine();
fb.produceAirCon();
