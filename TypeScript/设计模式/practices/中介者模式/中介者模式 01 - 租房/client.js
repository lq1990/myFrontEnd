"use strict";
exports.__esModule = true;
var Mediator_1 = require("./Mediator");
var HouseOwner_1 = require("./HouseOwner");
var Tenant_1 = require("./Tenant");
/**
 * 中介者模式：
 * 以租房为例，房主和租房客
 */
var mediator = new Mediator_1.Mediator();
var houseowner1 = new HouseOwner_1.HouseOwner("anna", mediator);
var tenant1 = new Tenant_1.Tenant("李四", mediator);
mediator.setHouseOwner(houseowner1);
mediator.setTenant(tenant1);
houseowner1.sendMsg("我是房主，要租房");
tenant1.sendMsg("我是租客，需要房");
// houseowner2.sendMsg("我是房主，有房待租，联系从速");
// tenant2.sendMsg("我是房客，急需房");
