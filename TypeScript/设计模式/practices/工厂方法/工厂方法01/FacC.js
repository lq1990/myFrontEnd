"use strict";
exports.__esModule = true;
var CarC_1 = require("./CarC");
var FacC = /** @class */ (function () {
    function FacC() {
    }
    FacC.prototype.prodCar = function () {
        return new CarC_1.CarC();
    };
    return FacC;
}());
exports.FacC = FacC;
