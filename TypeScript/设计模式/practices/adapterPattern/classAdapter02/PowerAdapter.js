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
var Power220V_1 = require("./Power220V");
var PowerAdapter = /** @class */ (function (_super) {
    __extends(PowerAdapter, _super);
    function PowerAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerAdapter.prototype.getPower5V = function () {
        _super.prototype.getPower220V.call(this);
        this.transform();
        console.log("got 5V...");
    };
    PowerAdapter.prototype.transform = function () {
        console.log("220V -> 5V");
    };
    return PowerAdapter;
}(Power220V_1.Power220V));
exports.PowerAdapter = PowerAdapter;
