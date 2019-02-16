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
var AHandler_1 = require("./AHandler");
var DeptManager = /** @class */ (function (_super) {
    __extends(DeptManager, _super);
    function DeptManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeptManager.prototype.handleRequest = function (user, fee) {
        var str = "";
        if (fee <= 1000) {
            if (user == "anna") {
                str = "同意" + user + "的申请，申请费用是" + fee + "元";
            }
            else {
                str = "拒绝" + user + "的申请，申请费用是" + fee + "元";
            }
        }
        else {
            if (this.getSuccessor() != null) {
                return this.getSuccessor().handleRequest(user, fee);
            }
        }
        return str;
    };
    return DeptManager;
}(AHandler_1.AHandler));
exports.DeptManager = DeptManager;
