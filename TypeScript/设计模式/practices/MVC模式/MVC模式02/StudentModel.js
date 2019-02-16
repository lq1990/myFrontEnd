"use strict";
exports.__esModule = true;
var StudentModel = /** @class */ (function () {
    function StudentModel() {
    }
    StudentModel.prototype.getName = function () {
        return this.name;
    };
    StudentModel.prototype.setName = function (n) {
        this.name = n;
    };
    StudentModel.prototype.getNr = function () {
        return this.nr;
    };
    StudentModel.prototype.setNr = function (n) {
        this.nr = n;
    };
    return StudentModel;
}());
exports.StudentModel = StudentModel;
