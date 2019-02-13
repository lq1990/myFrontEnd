"use strict";
exports.__esModule = true;
var Obj_1 = require("./Obj");
var Proxy = /** @class */ (function () {
    function Proxy() {
        this.obj = new Obj_1.Obj();
    }
    Proxy.prototype.addNumRefer = function () {
        Proxy.numRefer++;
    };
    Proxy.prototype.getNumRefer = function () {
        return Proxy.numRefer;
    };
    Proxy.prototype.refer = function () {
        this.obj.refer();
        this.addNumRefer();
        console.log("引用obj的次数：" + this.getNumRefer());
    };
    return Proxy;
}());
exports.Proxy = Proxy;
