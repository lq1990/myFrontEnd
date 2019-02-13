"use strict";
exports.__esModule = true;
var CarB_1 = require("./CarB");
var TireB_1 = require("./TireB");
var FacB = /** @class */ (function () {
    function FacB() {
    }
    FacB.prototype.prodCar = function () {
        return new CarB_1.CarB();
    };
    FacB.prototype.prodTire = function () {
        return new TireB_1.TireB();
    };
    return FacB;
}());
exports.FacB = FacB;
