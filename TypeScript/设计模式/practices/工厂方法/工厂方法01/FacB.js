"use strict";
exports.__esModule = true;
var CarB_1 = require("./CarB");
var FacB = /** @class */ (function () {
    function FacB() {
    }
    FacB.prototype.prodCar = function () {
        return new CarB_1.CarB();
    };
    return FacB;
}());
exports.FacB = FacB;
