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
var Car_1 = require("./Car");
var CarB = /** @class */ (function (_super) {
    __extends(CarB, _super);
    function CarB() {
        var _this = _super.call(this) || this;
        console.log("produce car B");
        return _this;
    }
    return CarB;
}(Car_1.Car));
exports.CarB = CarB;
