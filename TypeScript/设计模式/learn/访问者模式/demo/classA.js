"use strict";
exports.__esModule = true;
var classA = /** @class */ (function () {
    function classA() {
    }
    classA.prototype.method1 = function () {
        console.log("我是A");
    };
    classA.prototype.method2 = function (b) {
        b.showA(this);
    };
    return classA;
}());
exports.classA = classA;
