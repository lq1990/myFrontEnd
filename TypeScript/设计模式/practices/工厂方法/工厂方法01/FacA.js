"use strict";
exports.__esModule = true;
var CarA_1 = require("./CarA");
var FacA = /** @class */ (function () {
    function FacA() {
    }
    FacA.prototype.prodCar = function () {
        return new CarA_1.CarA();
    };
    return FacA;
}());
exports.FacA = FacA;
