"use strict";
exports.__esModule = true;
var FontFac_1 = require("./FontFac");
var Flyweight = /** @class */ (function () {
    function Flyweight() {
        this.fontPool = {};
    }
    Flyweight.prototype.getOneFont = function (k) {
        if (!this.fontPool[k]) {
            var val = new FontFac_1.FontFac(k);
            this.fontPool[k] = val;
        }
        return this.fontPool[k];
    };
    Flyweight.prototype.getPoolInfo = function () {
        var size = Object.keys(this.fontPool).length;
        return { "pool-content": this.fontPool, size: size };
    };
    return Flyweight;
}());
exports.Flyweight = Flyweight;
