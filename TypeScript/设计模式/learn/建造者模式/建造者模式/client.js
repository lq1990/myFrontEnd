"use strict";
exports.__esModule = true;
var PersonDirector_1 = require("./PersonDirector");
var ManBuilder_1 = require("./ManBuilder");
var WomanBuilder_1 = require("./WomanBuilder");
/**
 * 建造者模式：
 * 将一个复杂的对象的构建和它的表示分离，
 * 使得同样的构建过程可以创建不同的表示
 */
var pd = new PersonDirector_1.PersonDirector();
var woman = pd.constructPerson(new WomanBuilder_1.WomanBuilder());
var man = pd.constructPerson(new ManBuilder_1.ManBuilder());
