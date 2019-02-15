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
    DeptManager.prototype.handleFeeRequest = function (user, fee) {
        var str = "";
        if (fee < 1000) {
            if (user == "张三") {
                str = "成功：部门经理同意【" + user + "】的申请，聚餐费用金额是" + fee + "元";
            }
            else {
                str = "失败：部门经理拒绝申请";
            }
        }
        else {
            if (this.getSuccessor() != null) {
                return this.getSuccessor().handleFeeRequest(user, fee);
            }
        }
        return str;
    };
    return DeptManager;
}(AHandler_1.AHandler));
exports.DeptManager = DeptManager;
