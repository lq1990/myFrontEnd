"use strict";
exports.__esModule = true;
var Bachelor_1 = require("./Bachelor");
var College_1 = require("./College");
var ShowVisitor_1 = require("./ShowVisitor");
var SumVisitor_1 = require("./SumVisitor");
/**
 * 访问者模式
 * 学生（Bachelor, College）接受 拜访者的 拜访。
 * 不同的 visitor有不同的目的，也就是，不同的操作可以借助新的visitor实现，
 * 降低了操作间的耦合性。
 */
var list = [];
var ba = new Bachelor_1.Bachelor();
ba.setName("llin");
ba.setRating("100");
ba.setUni("Tianjin Uni");
var ba2 = new Bachelor_1.Bachelor();
var ba3 = new Bachelor_1.Bachelor();
ba2.setName("llinf");
ba2.setRating("100");
ba2.setUni("Tianjing Uni");
var co = new College_1.College();
co.setName("dalinge");
co.setRating("1");
co.setUni("bj Colloge");
list.push(ba);
list.push(ba2);
list.push(ba3);
list.push(co);
var v = new ShowVisitor_1.ShowVisitor();
var v1 = new SumVisitor_1.SumVisitor();
// 遍历 list所有的学生
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var l = list_1[_i];
    l.accept(v); // v 的目的：打印信息
    l.accept(v1); // v1 的SumVisitor为了统计 bachelor的学生个数
}
console.log(v1.getTotalBachelor());
