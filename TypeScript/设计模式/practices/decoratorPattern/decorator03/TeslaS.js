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
var TeslaS = /** @class */ (function (_super) {
    __extends(TeslaS, _super);
    function TeslaS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "This is TeslaS";
        return _this;
    }
    TeslaS.prototype.cost = function () {
        return 2000;
    };
    return TeslaS;
}(Car_1.Car));
exports.TeslaS = TeslaS;
