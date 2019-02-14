"use strict";
exports.__esModule = true;
var Officier_1 = require("./Officier");
var Soldier_1 = require("./Soldier");
/**
 * 组合模式：
 *
 * 阅兵仪式，
 * 有干部、小兵。
 * 干部可以带领干部、小兵，
 * 小兵不能带领。
 */
var leader = new Officier_1.Offcier("总领导");
var o1 = new Officier_1.Offcier("军官1");
var o2 = new Officier_1.Offcier("军官2");
leader.add(o1);
leader.add(o2);
var s1 = new Soldier_1.Soldier("小兵1.1");
var s2 = new Soldier_1.Soldier("小兵1.2");
o1.add(s1);
o1.add(s2);
leader.count();
