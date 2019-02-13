"use strict";
exports.__esModule = true;
var EngineA_1 = require("./EngineA");
var AirconA_1 = require("./AirconA");
var FacA = /** @class */ (function () {
    function FacA() {
    }
    FacA.prototype.prodEngine = function () {
        return new EngineA_1.EngineA();
    };
    FacA.prototype.prodAircon = function () {
        return new AirconA_1.AirconA();
    };
    return FacA;
}());
exports.FacA = FacA;
