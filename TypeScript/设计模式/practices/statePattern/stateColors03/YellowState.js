"use strict";
exports.__esModule = true;
var BlueState_1 = require("./BlueState");
var GreenState_1 = require("./GreenState");
var YellowState = /** @class */ (function () {
    function YellowState() {
    }
    YellowState.prototype.handleSX = function (c) {
        console.log("yellow -> blue");
        c.setState(new BlueState_1.BlueState());
    };
    YellowState.prototype.handleNX = function (c) {
        console.log("yellow -> green");
        c.setState(new GreenState_1.GreenState());
    };
    return YellowState;
}());
exports.YellowState = YellowState;
