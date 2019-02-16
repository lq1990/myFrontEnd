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
    function Tenant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   sendMsg(msg: string) {
    //     this.mediator.contact(msg,this);
    //   }
    Tenant.prototype.getMsg = function (msg) {
        console.log("我是租房客：" + this.name + "， 收到信息：" + msg);
    };
    return Tenant;
}(APerson_1.APerson));
exports.Tenant = Tenant;
