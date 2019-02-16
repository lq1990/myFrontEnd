"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getRollNo = function () {
        return this.rollNo;
    };
    Student.prototype.setRollNo = function (r) {
        this.rollNo = r;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (n) {
        this.name = n;
    };
    return Student;
}());
exports.Student = Student;
