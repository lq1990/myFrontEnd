"use strict";
exports.__esModule = true;
var EngineB_1 = require("./EngineB");
var AirConB_1 = require("./AirConB");
var FacB = /** @class */ (function () {
    function FacB() {
    }
    FacB.prototype.produceEngine = function () {
        var eng = new EngineB_1.EngineB();
        return eng;
    };
    FacB.prototype.produceAirCon = function () {
        var ac = new AirConB_1.AirConB();
        return ac;
    };
    return FacB;
}());
exports.FacB = FacB;
