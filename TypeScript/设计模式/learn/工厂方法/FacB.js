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
var Fac_1 = require("./Fac");
var CarB_1 = require("./CarB");
var FacB = /** @class */ (function (_super) {
    __extends(FacB, _super);
    function FacB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacB.prototype.createCar = function () {
        return new CarB_1.CarB();
    };
    return FacB;
}(Fac_1.Fac));
exports.FacB = FacB;
