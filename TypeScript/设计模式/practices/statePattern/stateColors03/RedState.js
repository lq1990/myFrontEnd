"use strict";
exports.__esModule = true;
var GreenState_1 = require("./GreenState");
var BlueState_1 = require("./BlueState");
var RedState = /** @class */ (function () {
    function RedState() {
    }
    RedState.prototype.handleSX = function (c) {
        console.log("red -> green");
        c.setState(new GreenState_1.GreenState());
    };
    RedState.prototype.handleNX = function (c) {
        console.log("red -> blue");
        c.setState(new BlueState_1.BlueState());
    };
    return RedState;
}());
exports.RedState = RedState;
