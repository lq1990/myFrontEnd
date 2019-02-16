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
var HouseOwner = /** @class */ (function (_super) {
    __extends(HouseOwner, _super);
    function HouseOwner(name, m) {
        return _super.call(this, name, m) || this;
    }
    HouseOwner.prototype.contact = function (msg) {
        this.mediator.contact(msg, this);
    };
    HouseOwner.prototype.getMsg = function (msg) {
        console.log("房主：" + this.name + ", 获得信息：" + msg);
    };
    return HouseOwner;
}(APerson_1.APerson));
exports.HouseOwner = HouseOwner;
