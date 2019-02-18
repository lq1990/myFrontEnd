"use strict";
exports.__esModule = true;
var Mediator_1 = require("./Mediator");
var HouseOwner_1 = require("./HouseOwner");
var Tenant_1 = require("./Tenant");
/**
 * 中介者模式：
 * 以租房为例。
 */
var m = new Mediator_1.Mediator();
var h1 = new HouseOwner_1.HouseOwner("anna", m);
var t1 = new Tenant_1.Tenant("张三", m);
m.setHouseOwner(h1);
m.setTenant(t1);
h1.sendMsg("我是房东anna，我有房要出租");
t1.sendMsg("我是房客张三，我需要房子");
