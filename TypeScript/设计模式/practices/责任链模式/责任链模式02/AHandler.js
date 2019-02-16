"use strict";
exports.__esModule = true;
var AHandler = /** @class */ (function () {
    function AHandler() {
    }
    AHandler.prototype.setSuccessor = function (s) {
        this.successor = s;
    };
    AHandler.prototype.getSuccessor = function () {
        return this.successor;
    };
    return AHandler;
}());
exports.AHandler = AHandler;
