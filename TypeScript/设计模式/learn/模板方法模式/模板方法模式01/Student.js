"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var APerson_1 = require("./APerson");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.preToSchool = function () {
        console.log("student - pre");
    };
    Student.prototype.dressUp = function () {
        console.log("穿校服");
    };
    Student.prototype.eatBreakfast = function () {
        console.log("吃妈妈做好的早餐");
    };
    Student.prototype.takeThings = function () {
        console.log("背书包，带上家庭作业和红领巾");
    };
    return Student;
}(APerson_1.APerson));
exports.Student = Student;
