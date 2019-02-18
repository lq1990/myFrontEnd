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
var AFlyweight_1 = require("./AFlyweight");
var ConFlyweight = /** @class */ (function (_super) {
    __extends(ConFlyweight, _super);
    function ConFlyweight(str) {
        var _this = _super.call(this) || this;
        _this.str = str;
        return _this;
    }
    ConFlyweight.prototype.operation = function () {
        console.log("concrete flyweight: " + this.str);
    };
    return ConFlyweight;
}(AFlyweight_1.AFlyweight));
exports.ConFlyweight = ConFlyweight;
