"use strict";
exports.__esModule = true;
var YellowState_1 = require("./YellowState");
var RedState_1 = require("./RedState");
var GreenState = /** @class */ (function () {
    function GreenState() {
    }
    GreenState.prototype.handleSX = function (c) {
        console.log("green 2 yellow");
        c.setState(new YellowState_1.YellowState());
    };
    GreenState.prototype.handleNX = function (c) {
        console.log("green 2 red");
        c.setState(new RedState_1.RedState());
    };
    return GreenState;
}());
exports.GreenState = GreenState;
