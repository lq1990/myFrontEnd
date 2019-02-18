"use strict";
exports.__esModule = true;
var Flyweight_1 = require("./Flyweight");
/**
 * 享元模式：
 * 使用对象共享的做法来降低系统中对象的个数。
 */
var fw = new Flyweight_1.Flyweight();
var font1 = fw.getOneFontFromPool("a");
font1.getFontInfo();
var font2 = fw.getOneFontFromPool("b");
font2.getFontInfo();
var font3 = fw.getOneFontFromPool("a");
font3.getFontInfo();
var font4 = fw.getOneFontFromPool("a");
font4.getFontInfo();
console.log(fw.getPoolInfo());
