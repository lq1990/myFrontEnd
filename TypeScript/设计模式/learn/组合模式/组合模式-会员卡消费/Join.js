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
var AMarket_1 = require("./AMarket");
var Join = /** @class */ (function (_super) {
    __extends(Join, _super);
    function Join(s) {
        var _this = _super.call(this) || this;
        _this.name = s;
        return _this;
    }
    Join.prototype.add = function (m) {
        throw new Error('Method not implemented.');
    };
    Join.prototype.remove = function (m) {
        throw new Error('Method not implemented.');
    };
    Join.prototype.payByCard = function () {
        console.log(this.name + " 消费，积分累积了");
    };
    return Join;
}(AMarket_1.AMarket));
exports.Join = Join;
