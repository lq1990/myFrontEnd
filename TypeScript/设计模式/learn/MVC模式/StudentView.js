"use strict";
exports.__esModule = true;
var StudentView = /** @class */ (function () {
    function StudentView() {
    }
    StudentView.prototype.printStuDetail = function (name, rollNo) {
        console.log("--------------------------");
        console.log("Student:");
        console.log("Name:    " + name);
        console.log("Roll No: " + rollNo);
        console.log("============================");
    };
    return StudentView;
}());
exports.StudentView = StudentView;
