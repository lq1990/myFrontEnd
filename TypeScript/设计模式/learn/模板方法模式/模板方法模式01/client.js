"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
/**
 * 模板方法模式
 */
var stu = new Student_1.Student();
stu.preToSchool();
var tea = new Teacher_1.Teacher();
tea.preToSchool();
