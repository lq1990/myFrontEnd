"use strict";
exports.__esModule = true;
var Bachelor_1 = require("./Bachelor");
var SumVisitor = /** @class */ (function () {
    function SumVisitor() {
        this.numOfBa = 0;
    }
    SumVisitor.prototype.visit = function (s) {
        if (s instanceof Bachelor_1.Bachelor) {
            this.numOfBa++;
        }
    };
    SumVisitor.prototype.getNumOfBa = function () {
        return this.numOfBa;
    };
    return SumVisitor;
}());
exports.SumVisitor = SumVisitor;
