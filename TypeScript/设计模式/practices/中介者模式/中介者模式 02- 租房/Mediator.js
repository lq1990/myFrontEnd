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
var AMediator_1 = require("./AMediator");
var Mediator = /** @class */ (function (_super) {
    __extends(Mediator, _super);
    function Mediator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mediator.prototype.setHouseOwner = function (h) {
        this.houseowner = h;
    };
    Mediator.prototype.getHouseOwner = function () {
        return this.houseowner;
    };
    Mediator.prototype.setTenant = function (t) {
        this.tenant = t;
    };
    Mediator.prototype.getTenant = function () {
        return this.tenant;
    };
    Mediator.prototype.contact = function (msg, p) {
        if (p == this.houseowner) {
            this.tenant.getMsg(msg);
        }
        else {
            this.houseowner.getMsg(msg);
        }
    };
    return Mediator;
}(AMediator_1.AMediator));
exports.Mediator = Mediator;
