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
var MediatorStructor = /** @class */ (function (_super) {
    __extends(MediatorStructor, _super);
    function MediatorStructor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediatorStructor.prototype.getHouseOwner = function () {
        return this.houseOwner;
    };
    MediatorStructor.prototype.setHouseOwner = function (h) {
        this.houseOwner = h;
    };
    MediatorStructor.prototype.getTenant = function () {
        return this.tenant;
    };
    MediatorStructor.prototype.setTenant = function (t) {
        this.tenant = t;
    };
    MediatorStructor.prototype.contact = function (msg, person) {
        if (person == this.houseOwner) {
            this.tenant.getMsg(msg);
        }
        else {
            this.houseOwner.getMsg(msg);
        }
    };
    return MediatorStructor;
}(AMediator_1.AMediator));
exports.MediatorStructor = MediatorStructor;
