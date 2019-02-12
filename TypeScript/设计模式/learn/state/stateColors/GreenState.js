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
var State_1 = require("./State");
var EnumState_1 = require("./EnumState");
var BlackState_1 = require("./BlackState");
var BlueState_1 = require("./BlueState");
var GreenState = /** @class */ (function (_super) {
    __extends(GreenState, _super);
    function GreenState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GreenState.prototype.handlepush = function (c) {
        console.log("green 2 black");
        c.setState(new BlackState_1.BlackState());
    };
    GreenState.prototype.handlepull = function (c) {
        console.log("green 2 blue");
        c.setState(new BlueState_1.BlueState());
    };
    GreenState.prototype.getcolor = function () {
        return EnumState_1.EnumState.green;
    };
    return GreenState;
}(State_1.State));
exports.GreenState = GreenState;
