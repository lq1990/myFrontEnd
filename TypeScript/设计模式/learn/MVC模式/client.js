"use strict";
exports.__esModule = true;
var StudentView_1 = require("./StudentView");
var StudentCtrl_1 = require("./StudentCtrl");
var Student_1 = require("./Student");
/**
 * MVC模式，model，view，ctrl
 */
var model = new Student_1.Student();
model.setName("anna");
model.setRollNo("1001");
var view = new StudentView_1.StudentView();
var ctrl = new StudentCtrl_1.StudentCtrl(model, view);
ctrl.updateView();
// 更细模型数据
ctrl.setStudentName("John");
ctrl.updateView();
