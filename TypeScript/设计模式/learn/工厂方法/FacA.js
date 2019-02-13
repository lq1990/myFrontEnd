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
var CarA_1 = require("./CarA");
var FacA = /** @class */ (function (_super) {
    __extends(FacA, _super);
    function FacA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacA.prototype.createCar = function () {
        return new CarA_1.CarA();
    };
    return FacA;
}(Fac_1.Fac));
exports.FacA = FacA;
