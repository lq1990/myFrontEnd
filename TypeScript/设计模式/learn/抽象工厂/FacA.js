"use strict";
exports.__esModule = true;
var EngineA_1 = require("./EngineA");
var AirconditionA_1 = require("./AirconditionA");
var FacA = /** @class */ (function () {
    function FacA() {
    }
    FacA.prototype.createEngine = function () {
        return new EngineA_1.EngineA();
    };
    FacA.prototype.createAircondition = function () {
        return new AirconditionA_1.AirconditionA();
    };
    return FacA;
}());
exports.FacA = FacA;
