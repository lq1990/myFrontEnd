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
var GreenState_1 = require("./GreenState");
var RedState_1 = require("./RedState");
var EnumState_1 = require("./EnumState");
var BlueState = /** @class */ (function (_super) {
    __extends(BlueState, _super);
    function BlueState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlueState.prototype.handlepush = function (c) {
        console.log("blue 2 green");
        c.setState(new GreenState_1.GreenState());
    };
    BlueState.prototype.handlepull = function (c) {
        console.log("blue 2 red");
        c.setState(new RedState_1.RedState());
    };
    BlueState.prototype.getcolor = function () {
        return EnumState_1.EnumState.blue;
    };
    return BlueState;
}(State_1.State));
exports.BlueState = BlueState;
