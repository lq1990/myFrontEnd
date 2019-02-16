"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ACardPartner_1 = require("./ACardPartner");
var PartnerB = /** @class */ (function (_super) {
    __extends(PartnerB, _super);
    function PartnerB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartnerB.prototype.changeMoney = function (money, other) {
        this.setMoney(this.getMoney() + money);
        other.setMoney(other.getMoney() - money);
    };
    return PartnerB;
}(ACardPartner_1.ACardPartner));
exports.PartnerB = PartnerB;
