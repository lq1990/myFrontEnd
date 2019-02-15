"use strict";
exports.__esModule = true;
var AHandler = /** @class */ (function () {
    function AHandler() {
    }
    /**
     * 取值方法
     */
    AHandler.prototype.getSuccessor = function () {
        return this.successor;
    };
    AHandler.prototype.setSuccessor = function (s) {
        this.successor = s;
    };
    return AHandler;
}());
exports.AHandler = AHandler;
