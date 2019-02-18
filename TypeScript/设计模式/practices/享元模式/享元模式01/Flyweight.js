"use strict";
exports.__esModule = true;
var FontFactory_1 = require("./FontFactory");
var Flyweight = /** @class */ (function () {
    function Flyweight() {
        this.fontpool = {};
    }
    Flyweight.prototype.getOneFontFromPool = function (k) {
        if (!this.fontpool[k]) {
            var val = new FontFactory_1.FontFactory(k);
            this.fontpool[k] = val;
        }
        return this.fontpool[k];
    };
    Flyweight.prototype.getPoolInfo = function () {
        var size = Object.keys(this.fontpool).length;
        return { "fontpool-content": this.fontpool, "size": size };
    };
    return Flyweight;
}());
exports.Flyweight = Flyweight;
