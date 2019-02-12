"use strict";
exports.__esModule = true;
var RedState_1 = require("./RedState");
var YellowState_1 = require("./YellowState");
var BlueState = /** @class */ (function () {
    function BlueState() {
    }
    BlueState.prototype.handleSX = function (c) {
        console.log("blue 2 red");
        c.setState(new RedState_1.RedState());
    };
    BlueState.prototype.handleNX = function (c) {
        console.log("blue 2 yellow");
        c.setState(new YellowState_1.YellowState());
    };
    return BlueState;
}());
exports.BlueState = BlueState;
