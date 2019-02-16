"use strict";
exports.__esModule = true;
/**
 * 抽象牌友类
 */
var ACardPartner = /** @class */ (function () {
    function ACardPartner() {
    }
    ACardPartner.prototype.setMoney = function (m) {
        this.money = m;
    };
    ACardPartner.prototype.getMoney = function () {
        return this.money;
    };
    return ACardPartner;
}());
exports.ACardPartner = ACardPartner;
