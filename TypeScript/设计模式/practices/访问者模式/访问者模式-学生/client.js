"use strict";
exports.__esModule = true;
var Bachelor_1 = require("./Bachelor");
var College_1 = require("./College");
var ShowVisitor_1 = require("./ShowVisitor");
var SumVisitor_1 = require("./SumVisitor");
/**
 * 访问者模式：
 * 多个访问者，有着不同的目的。
 * 被访问者：数据，学生
 */
var ba1 = new Bachelor_1.Bachelor();
var ba2 = new Bachelor_1.Bachelor();
var ba3 = new Bachelor_1.Bachelor();
var co1 = new College_1.College();
var list = [];
list.push(ba1);
list.push(ba2);
list.push(ba3);
list.push(co1);
var v1 = new ShowVisitor_1.ShowVisitor();
var v2 = new SumVisitor_1.SumVisitor();
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var s = list_1[_i];
    s.accept(v1);
    s.accept(v2);
}
console.log(v2.getNumOfBa());
