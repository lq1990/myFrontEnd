"use strict";
exports.__esModule = true;
var ProjectManager_1 = require("./ProjectManager");
var DeptManager_1 = require("./DeptManager");
var GeneralManager_1 = require("./GeneralManager");
/**
 * 责任链模式：
 * 很多对象由每一个对象对其下家的引用而连接起来形成一条链。
 */
var pm = new ProjectManager_1.ProjectManager();
var dm = new DeptManager_1.DeptManager();
var gm = new GeneralManager_1.GeneralManager();
pm.setSuccessor(dm);
dm.setSuccessor(gm);
console.log(pm.handleRequest("anna", 300));
console.log(pm.handleRequest("beta", 300));
console.log("-------------------");
console.log(pm.handleRequest("anna", 900));
console.log(pm.handleRequest("beta", 900));
console.log("-------------------");
console.log(pm.handleRequest("anna", 9000));
console.log(pm.handleRequest("beta", 9000));
