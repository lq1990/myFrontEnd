"use strict";
exports.__esModule = true;
var MediatorStructure_1 = require("./MediatorStructure");
var HouseOwner_1 = require("./HouseOwner");
var Tenant_1 = require("./Tenant");
/**
 * 中介者模式：
 * 租房案例。
 */
var mediator = new MediatorStructure_1.MediatorStructor();
// 房主和租客只需要知道 中介
var houseowner = new HouseOwner_1.HouseOwner("房东张三", mediator);
var tenant = new Tenant_1.Tenant("房客李四", mediator);
// 中介要知道 房主和租客
mediator.setHouseOwner(houseowner);
mediator.setTenant(tenant);
tenant.contact("我是租房客，听说你那里有 三室房子要出租！");
houseowner.contact("我是房主，你需要出租吗？");
