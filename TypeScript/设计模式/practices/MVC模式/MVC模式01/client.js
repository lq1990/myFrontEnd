"use strict";
exports.__esModule = true;
var StudentModel_1 = require("./StudentModel");
var View_1 = require("./View");
var Ctrl_1 = require("./Ctrl");
/**
 * MVC模式
 */
var model = new StudentModel_1.StudentModel();
model.setName("beta");
model.setNr("1001");
var view = new View_1.View();
var ctrl = new Ctrl_1.Ctrl(model, view);
ctrl.updateView();
ctrl.setStuName("alpha");
ctrl.updateView();
