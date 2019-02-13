"use strict";
exports.__esModule = true;
var EngineB_1 = require("./EngineB");
var AirconB_1 = require("./AirconB");
var FacB = /** @class */ (function () {
    function FacB() {
    }
    FacB.prototype.pordEngine = function () {
        return new EngineB_1.EngineB();
    };
    FacB.prototype.prodAircon = function () {
        return new AirconB_1.AirconB();
    };
    return FacB;
}());
exports.FacB = FacB;
