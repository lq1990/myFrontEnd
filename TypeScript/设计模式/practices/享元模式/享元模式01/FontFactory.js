"use strict";
exports.__esModule = true;
var FontFactory = /** @class */ (function () {
    function FontFactory(f) {
        this.font = f;
    }
    FontFactory.prototype.getFontInfo = function () {
        console.log("当前font是：" + this.font);
    };
    return FontFactory;
}());
exports.FontFactory = FontFactory;
