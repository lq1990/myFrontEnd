"use strict";
exports.__esModule = true;
var State = /** @class */ (function () {
    function State(color) {
        this.color = color;
    }
    State.prototype.handle = function (ctx) {
        console.log("turn to " + this.color);
        ctx.setState(this);
    };
    return State;
}());
exports.State = State;
