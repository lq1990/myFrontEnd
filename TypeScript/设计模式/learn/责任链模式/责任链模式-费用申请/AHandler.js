"use strict";
exports.__esModule = true;
var AHandler = /** @class */ (function () {
    function AHandler() {
        this.successor = null;
    }
    AHandler.prototype.getSuccessor = function () {
        return this.successor;
    };
    AHandler.prototype.setSuccessor = function (s) {
        this.successor = s;
    };
    return AHandler;
}());
exports.AHandler = AHandler;
