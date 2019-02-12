"use strict";
exports.__esModule = true;
var Context = /** @class */ (function () {
    function Context() {
        this.state = null;
    }
    Context.prototype.setState = function (state) {
        this.state = state;
    };
    Context.prototype.getState = function () {
        return this.state;
    };
    return Context;
}());
exports.Context = Context;
