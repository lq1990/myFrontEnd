"use strict";
exports.__esModule = true;
var AirconA = /** @class */ (function () {
    function AirconA() {
        console.log("produce AirCondition A");
        this.airconWork();
    }
    AirconA.prototype.airconWork = function () {
        console.log("airconA works");
    };
    return AirconA;
}());
exports.AirconA = AirconA;
