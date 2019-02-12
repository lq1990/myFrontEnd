"use strict";
exports.__esModule = true;
var State = /** @class */ (function () {
    function State(color) {
        this.color = color;
    }
    // 处理改状态下的具体逻辑
    State.prototype.handle = function (context) {
        console.log("turn to " + this.color);
        context.setState(this);
    };
    return State;
}());
exports.State = State;
