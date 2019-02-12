"use strict";
/**
 * 类适配器
 * 目标：220V电压转成5V，通过类适配器实现
 * Target: 5V
 * Adaptee: 220V
 */
exports.__esModule = true;
var NoteBook_1 = require("./NoteBook");
exports.NoteBook = NoteBook_1.NoteBook;
var Power220V_1 = require("./Power220V");
exports.Power220V = Power220V_1.Power220V;
var PowerAdapter_1 = require("./PowerAdapter");
exports.PowerAdapter = PowerAdapter_1.PowerAdapter;
