"use strict";
exports.__esModule = true;
var Bachelor_1 = require("./Bachelor");
var College_1 = require("./College");
var ShowVisitor_1 = require("./ShowVisitor");
var SumVisitor_1 = require("./SumVisitor");
var Master_1 = require("./Master");
/**
 * 访问者模式。
 * 将数据结构，对数据的操作分离。
 */
//  创建数据
var list = [];
var ba1 = new Bachelor_1.Bachelor();
var ba2 = new Bachelor_1.Bachelor();
var ba3 = new Bachelor_1.Bachelor();
var co1 = new College_1.College();
var co2 = new College_1.College();
var ma1 = new Master_1.Master();
list.push(ba1);
list.push(ba2);
list.push(ba3);
list.push(co1);
list.push(co2);
list.push(ma1);
// 遍历，并使用visitor
var v1 = new ShowVisitor_1.ShowVisitor();
var v2 = new SumVisitor_1.SumVisitor();
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var a = list_1[_i];
    a.accept(v1);
    a.accept(v2);
}
console.log(v2.getNumOfBa());
