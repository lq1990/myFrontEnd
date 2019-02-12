"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CarOption_1 = require("./CarOption");
var EnhancedPilot = /** @class */ (function (_super) {
    __extends(EnhancedPilot, _super);
    function EnhancedPilot(name) {
        var _this = _super.call(this) || this;
        _this.decCar = name;
        return _this;
    }
    EnhancedPilot.prototype.getDes = function () {
        return this.decCar.getDes() + " is enhanced.";
    };
    EnhancedPilot.prototype.cost = function () {
        return this.decCar.cost() + 100;
    };
    return EnhancedPilot;
}(CarOption_1.CarOption));
exports.EnhancedPilot = EnhancedPilot;
