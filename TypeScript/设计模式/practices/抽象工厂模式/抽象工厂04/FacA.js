"use strict";
exports.__esModule = true;
var CarA_1 = require("./CarA");
var TireA_1 = require("./TireA");
var FacA = /** @class */ (function () {
    function FacA() {
    }
    FacA.prototype.prodCar = function () {
        return new CarA_1.CarA();
    };
    FacA.prototype.prodTire = function () {
        return new TireA_1.TireA();
    };
    return FacA;
}());
exports.FacA = FacA;
