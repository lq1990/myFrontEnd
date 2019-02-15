"use strict";
exports.__esModule = true;
var GeneralManager_1 = require("./GeneralManager");
var DeptManager_1 = require("./DeptManager");
var ProjectManager_1 = require("./ProjectManager");
/**
 * 责任链模式：
 * 聚会费用申请
 */
var h1 = new GeneralManager_1.GeneralManager();
var h2 = new DeptManager_1.DeptManager();
var h3 = new ProjectManager_1.ProjectManager();
h3.setSuccessor(h2);
h2.setSuccessor(h1);
// test
var t1 = h3.handleFeeRequest("张三", 300);
console.log("test1: " + t1);
var t2 = h3.handleFeeRequest("李四", 300);
console.log("test2: " + t2);
console.log("----------------------------------------");
var t3 = h3.handleFeeRequest("张三", 700);
console.log("test1: " + t3);
var t4 = h3.handleFeeRequest("李四", 700);
console.log("test2: " + t4);
console.log("----------------------------------------");
var t5 = h3.handleFeeRequest("张三", 3000);
console.log("test1: " + t5);
var t6 = h3.handleFeeRequest("李四", 3000);
console.log("test2: " + t6);
