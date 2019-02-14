"use strict";
exports.__esModule = true;
var Composite_1 = require("./Composite");
var Leaf_1 = require("./Leaf");
/**
 * 组合模式：
 * 将对象组合成树形结构，以表示 部分-整体 的层次结构。
 * 此模式使得用户对单个对象和 组合对象的使用具有一致性。
 */
var root_com = new Composite_1.Composite();
root_com.name = "根节点";
var left_com = new Composite_1.Composite();
left_com.name = "左节点";
var right_com = new Composite_1.Composite();
right_com.name = "右节点";
var leaf1 = new Leaf_1.Leaf();
leaf1.name = "右-子节点1";
var leaf2 = new Leaf_1.Leaf();
leaf2.name = "右-子节点2";
right_com.add(leaf1);
right_com.add(leaf2);
root_com.add(right_com);
root_com.add(left_com);
root_com.eachChild();
