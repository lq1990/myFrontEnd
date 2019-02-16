"use strict";
exports.__esModule = true;
var StudentCtrl = /** @class */ (function () {
    function StudentCtrl(model, view) {
        this.model = model;
        this.view = view;
    }
    StudentCtrl.prototype.setStudentName = function (name) {
        this.model.setName(name);
    };
    StudentCtrl.prototype.getStudentName = function () {
        return this.model.getName();
    };
    StudentCtrl.prototype.setStudentRollNo = function (rollNo) {
        this.model.setRollNo(rollNo);
    };
    StudentCtrl.prototype.getStudentRollNo = function () {
        return this.model.getRollNo();
    };
    StudentCtrl.prototype.updateView = function () {
        this.view.printStuDetail(this.model.getName(), this.model.getRollNo());
    };
    return StudentCtrl;
}());
exports.StudentCtrl = StudentCtrl;
