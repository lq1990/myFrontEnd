"use strict";
exports.__esModule = true;
var EngineA_1 = require("./EngineA");
var AirConA_1 = require("./AirConA");
var FacA = /** @class */ (function () {
    function FacA() {
    }
    FacA.prototype.produceEngine = function () {
        var engA = new EngineA_1.EngineA();
        return engA;
    };
    FacA.prototype.produceAirCon = function () {
        var airconA = new AirConA_1.AirConA();
        return airconA;
    };
    return FacA;
}());
exports.FacA = FacA;
