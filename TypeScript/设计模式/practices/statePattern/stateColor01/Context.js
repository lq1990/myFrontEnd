"use strict";
exports.__esModule = true;
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.prototype.setState = function (val) {
        this.state = val;
    };
    Context.prototype.getState = function () {
        return this.state;
    };
    return Context;
}());
exports.Context = Context;
