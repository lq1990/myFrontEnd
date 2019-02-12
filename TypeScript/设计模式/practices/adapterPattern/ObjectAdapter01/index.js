"use strict";
/**
 * Target: 5V, IPower5V
 * Adaptee: 220V, Power220V
 * PowerAdapter
 *
 * 对象适配器。适配器不继承于 源对象，用关联的方式。
 */
exports.__esModule = true;
var NoteBook_1 = require("./NoteBook");
exports.NoteBook = NoteBook_1.NoteBook;
var Power220V_1 = require("./Power220V");
exports.Power220V = Power220V_1.Power220V;
var PowerAdapter_1 = require("./PowerAdapter");
exports.PowerAdapter = PowerAdapter_1.PowerAdapter;
