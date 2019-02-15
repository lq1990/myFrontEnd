"use strict";
exports.__esModule = true;
var ConcreteBuilder_1 = require("./ConcreteBuilder");
var Director_1 = require("./Director");
/**
 * 建造者模式
 * 按照指定的蓝图建造产品，
 * 目的：通过组装零配件而产生一个新产品。
 *
 * Product,
 * Builder, ConcreteBuilder,
 * Director
 */
var builder = new ConcreteBuilder_1.ConcreteBuilder();
var director = new Director_1.Director(builder);
var product = director.construct();
console.log(product);
