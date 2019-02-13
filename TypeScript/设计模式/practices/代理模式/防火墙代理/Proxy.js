"use strict";
exports.__esModule = true;
var PC_1 = require("./PC");
var Proxy = /** @class */ (function () {
    function Proxy() {
        this.pc = new PC_1.PC();
    }
    Proxy.prototype.visit = function () {
        console.log("防火墙代理先工作！");
        this.pc.visit();
    };
    return Proxy;
}());
exports.Proxy = Proxy;
