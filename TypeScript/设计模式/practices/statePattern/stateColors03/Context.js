"use strict";
exports.__esModule = true;
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.prototype.setState = function (state) {
        this.state = state;
    };
    Context.prototype.sx = function () {
        this.state.handleSX(this);
        return this;
    };
    Context.prototype.nx = function () {
        this.state.handleNX(this);
        return this;
    };
    return Context;
}());
exports.Context = Context;
