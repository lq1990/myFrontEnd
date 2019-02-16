"use strict";
exports.__esModule = true;
var ProjectManager_1 = require("./ProjectManager");
var DeptManager_1 = require("./DeptManager");
var GeneralManager_1 = require("./GeneralManager");
/**
 * 责任链模式：
 *
 */
var pm = new ProjectManager_1.ProjectManager();
var dm = new DeptManager_1.DeptManager();
var gm = new GeneralManager_1.GeneralManager();
pm.setSuccessor(dm);
dm.setSuccessor(gm);
var t1 = pm.handleRequest("anna", 200);
console.log("t1: " + t1);
var t2 = pm.handleRequest("anna", 900);
console.log("t2: " + t2);
