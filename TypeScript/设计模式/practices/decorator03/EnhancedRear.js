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
var EnhancedRear = /** @class */ (function (_super) {
    __extends(EnhancedRear, _super);
    function EnhancedRear(name) {
        var _this = _super.call(this) || this;
        _this.enCar = name;
        return _this;
    }
    EnhancedRear.prototype.getDes = function () {
        return this.enCar.getDes() + " Its rear is enhanced.";
    };
    EnhancedRear.prototype.cost = function () {
        return this.enCar.cost() + 200;
    };
    return EnhancedRear;
}(CarOption_1.CarOption));
exports.EnhancedRear = EnhancedRear;
