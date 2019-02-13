"use strict";
exports.__esModule = true;
var CarA_1 = require("./CarA");
var CarB_1 = require("./CarB");
var Fac = /** @class */ (function () {
    function Fac() {
    }
    Fac.prototype.createCar = function (type) {
        switch (type) {
            case "A":
                return new CarA_1.CarA();
            case "B":
                return new CarB_1.CarB();
            default:
                break;
        }
        return null;
    };
    return Fac;
}());
exports.Fac = Fac;
