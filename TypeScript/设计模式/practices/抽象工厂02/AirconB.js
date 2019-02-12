"use strict";
exports.__esModule = true;
var AirconB = /** @class */ (function () {
    function AirconB() {
        console.log("produce AirCondition B");
        this.airconWork();
    }
    AirconB.prototype.airconWork = function () {
        console.log("airconB works");
    };
    return AirconB;
}());
exports.AirconB = AirconB;
