"use strict";
exports.__esModule = true;
var Mediator_1 = require("./Mediator");
var HouseOwner_1 = require("./HouseOwner");
var Tenant_1 = require("./Tenant");
/**
 * 中介者模式
 */
var mediator = new Mediator_1.Mediator();
var houseowner = new HouseOwner_1.HouseOwner("房东张三", mediator);
var tenant = new Tenant_1.Tenant("租客李四", mediator);
mediator.setHouseOwner(houseowner);
mediator.setTenant(tenant);
tenant.contact("我是租客，要房");
houseowner.contact("我是房东，有房出租");
