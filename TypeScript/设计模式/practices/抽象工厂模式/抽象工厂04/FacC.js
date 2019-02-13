"use strict";
exports.__esModule = true;
var CarC_1 = require("./CarC");
var TireC_1 = require("./TireC");
var FacC = /** @class */ (function () {
    function FacC() {
    }
    FacC.prototype.prodCar = function () {
        return new CarC_1.CarC();
    };
    FacC.prototype.prodTire = function () {
        return new TireC_1.TireC();
    };
    return FacC;
}());
exports.FacC = FacC;
