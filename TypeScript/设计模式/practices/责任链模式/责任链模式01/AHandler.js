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
        console.log("设置下个人：");
        console.log(s);
        this.successor = s;
    };
    return AHandler;
}());
exports.AHandler = AHandler;
