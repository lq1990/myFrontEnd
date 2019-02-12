"use strict";
exports.__esModule = true;
var Part1_1 = require("./Part1");
var Part2_1 = require("./Part2");
var Part3_1 = require("./Part3");
var Facade = /** @class */ (function () {
    function Facade() {
        this.p1 = new Part1_1.Part1();
        this.p2 = new Part2_1.Part2();
        this.p3 = new Part3_1.Part3();
    }
    Facade.prototype.on = function () {
        this.p1.on();
        this.p2.on();
        this.p3.on();
    };
    return Facade;
}());
exports.Facade = Facade;
