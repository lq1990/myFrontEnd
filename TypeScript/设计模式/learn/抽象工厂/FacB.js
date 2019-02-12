"use strict";
exports.__esModule = true;
var EngineB_1 = require("./EngineB");
var AirconditionB_1 = require("./AirconditionB");
var FacB = /** @class */ (function () {
    function FacB() {
    }
    FacB.prototype.createEngine = function () {
        return new EngineB_1.EngineB();
    };
    FacB.prototype.createAircondition = function () {
        return new AirconditionB_1.AirconditionB();
    };
    return FacB;
}());
exports.FacB = FacB;
