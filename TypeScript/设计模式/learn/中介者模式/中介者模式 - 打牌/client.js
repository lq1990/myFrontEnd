"use strict";
exports.__esModule = true;
var PartnerA_1 = require("./PartnerA");
var PartnerB_1 = require("./PartnerB");
/**
 * 中介者模式
 */
var A = new PartnerA_1.PartnerA();
A.setMoney(20);
var B = new PartnerB_1.PartnerB();
B.setMoney(20);
A.changeMoney(5, B);
console.log("A的钱：" + A.getMoney());
console.log("B的钱：" + B.getMoney());
B.changeMoney(10, A);
console.log("A的钱：" + A.getMoney());
console.log("B的钱：" + B.getMoney());
