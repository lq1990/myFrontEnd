"use strict";
exports.__esModule = true;
var EngineB_1 = require("./EngineB");
var ArconB_1 = require("./ArconB");
var FacB = /** @class */ (function () {
    function FacB() {
    }
    FacB.prototype.prodEngine = function () {
        return new EngineB_1.EngineB();
    };
    FacB.prototype.prodAircon = function () {
        return new ArconB_1.AirconB();
    };
    return FacB;
}());
exports.FacB = FacB;
