"use strict";
exports.__esModule = true;
var Fan = /** @class */ (function () {
    // Fan是观察者，观察者要观察的主题要通过 构造器
    function Fan(sub) {
        sub.addObserver(this);
    }
    Fan.prototype.update = function (temp) {
        if (temp > 30) {
            console.log("我是风扇。太热了，我要开始吹风了！");
        }
        else {
            console.log("我是风扇。凉快，不用吹风咯！");
        }
    };
    return Fan;
}());
exports.Fan = Fan;
