"use strict";
exports.__esModule = true;
var TempDisplay = /** @class */ (function () {
    function TempDisplay(sub) {
        sub.addObserver(this);
    }
    TempDisplay.prototype.update = function (temp) {
        console.log("我是显示器，温度改变了，我要刷新我的显示器了");
    };
    return TempDisplay;
}());
exports.TempDisplay = TempDisplay;
