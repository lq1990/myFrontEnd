"use strict";
exports.__esModule = true;
var Fan = /** @class */ (function () {
    function Fan(sub) {
        sub.addObserver(this);
    }
    Fan.prototype.update = function (temp) {
        if (temp > 30) {
            console.log("我是风扇，天太热，我要吹风了！");
        }
        else {
            console.log("我是风扇，天气不错，不用工作！");
        }
    };
    return Fan;
}());
exports.Fan = Fan;
