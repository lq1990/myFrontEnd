"use strict";
exports.__esModule = true;
var Bachelor_1 = require("./Bachelor");
/**
 * 为了统计bachelor学生个数
 */
var SumVisitor = /** @class */ (function () {
    function SumVisitor() {
        this.totalBachelor = 0;
    }
    SumVisitor.prototype.visit = function (v) {
        if (v instanceof Bachelor_1.Bachelor) {
            this.totalBachelor++;
        }
    };
    SumVisitor.prototype.getTotalBachelor = function () {
        return this.totalBachelor;
    };
    return SumVisitor;
}());
exports.SumVisitor = SumVisitor;
