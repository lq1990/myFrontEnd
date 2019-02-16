"use strict";
exports.__esModule = true;
var View = /** @class */ (function () {
    function View() {
    }
    View.prototype.printStuInfo = function (name, nr) {
        console.log("Student Info:");
        console.log("Name:  " + name);
        console.log("Number:" + nr);
    };
    return View;
}());
exports.View = View;
