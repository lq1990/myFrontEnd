"use strict";
exports.__esModule = true;
var User_1 = require("./User");
/**
 * 中介者模式
 */
var robert = new User_1.User("Robert");
var john = new User_1.User("John");
robert.sendMsg("Hi! John!");
john.sendMsg("hi, robert");
