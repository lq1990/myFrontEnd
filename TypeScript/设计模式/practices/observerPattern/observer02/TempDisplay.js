"use strict";
exports.__esModule = true;
var TempDisplay = /** @class */ (function () {
    function TempDisplay(sub) {
        sub.addObserver(this);
    }
    TempDisplay.prototype.update = function (temp) {
        console.log("我是温度显示器，一个观察者，我要更新显示了！");
    };
    return TempDisplay;
}());
exports.TempDisplay = TempDisplay;
