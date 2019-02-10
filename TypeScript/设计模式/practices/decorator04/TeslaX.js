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
var TeslaX = /** @class */ (function (_super) {
    __extends(TeslaX, _super);
    function TeslaX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "TeslaX";
        return _this;
    }
    TeslaX.prototype.cost = function () {
        return 1000;
    };
    return TeslaX;
}(Car_1.Car));
exports.TeslaX = TeslaX;
