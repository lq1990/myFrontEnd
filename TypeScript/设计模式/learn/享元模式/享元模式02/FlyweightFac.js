"use strict";
exports.__esModule = true;
var ConFlyweight_1 = require("./ConFlyweight");
var FlyweightFac = /** @class */ (function () {
    function FlyweightFac() {
        this.flyweights = {};
    }
    FlyweightFac.prototype.getFlyweight = function (obj) {
        var fw = this.flyweights[obj];
        if (fw == null) {
            fw = new ConFlyweight_1.ConFlyweight(obj);
            this.flyweights[obj] = fw;
        }
        return fw;
    };
    FlyweightFac.prototype.getFlyweightInfo = function () {
        var size = Object.keys(this.flyweights).length;
        return { "content": this.flyweights, "size:": size };
    };
    return FlyweightFac;
}());
exports.FlyweightFac = FlyweightFac;
