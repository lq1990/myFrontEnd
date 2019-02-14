"use strict";
exports.__esModule = true;
var classA_1 = require("./classA");
var classB_1 = require("./classB");
/**
 * 访问者模式
 *
 */
var a = new classA_1.classA();
a.method1();
a.method2(new classB_1.classB());
