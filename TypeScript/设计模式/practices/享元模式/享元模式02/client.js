"use strict";
exports.__esModule = true;
var Flyweight_1 = require("./Flyweight");
/**
 * 享元模式
 * 使用对象共享的方式，
 * 核心是创建 对象池
 */
var fw = new Flyweight_1.Flyweight();
var f1 = fw.getOneFont("a");
var f2 = fw.getOneFont("a");
var f3 = fw.getOneFont("A");
var f4 = fw.getOneFont("a");
console.log(fw.getPoolInfo());
