"use strict";
exports.__esModule = true;
var Context = /** @class */ (function () {
    function Context(m) {
        this.method = m;
    }
    Context.prototype["do"] = function () {
        this.method.sort();
    };
    return Context;
}());
exports.Context = Context;
