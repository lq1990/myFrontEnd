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
var APerson_1 = require("./APerson");
var Tenant = /** @class */ (function (_super) {
    __extends(Tenant, _super);
    function Tenant(name, m) {
        return _super.call(this, name, m) || this;
    }
    /**
     * 与中介者联系
     * @param msg
     */
    Tenant.prototype.contact = function (msg) {
        this.mediator.contact(msg, this);
    };
    Tenant.prototype.getMsg = function (msg) {
        console.log("租房客：" + this.name + ", 获得信息：" + msg);
    };
    return Tenant;
}(APerson_1.APerson));
exports.Tenant = Tenant;
