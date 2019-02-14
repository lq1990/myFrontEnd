"use strict";
exports.__esModule = true;
var Branch_1 = require("./Branch");
var Join_1 = require("./Join");
/**
 * 组合模式
 */
var root = new Branch_1.Branch("总店");
var b1 = new Branch_1.Branch("分店1");
var b2 = new Branch_1.Branch("分店2");
var j1 = new Join_1.Join("加盟店1.1");
var j2 = new Join_1.Join("加盟店1.2");
b1.add(j1);
b1.add(j2);
root.add(b1);
root.add(b2);
root.payByCard();
// b1.payByCard();
