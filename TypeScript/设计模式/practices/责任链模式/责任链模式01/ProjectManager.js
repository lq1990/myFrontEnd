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
/**
 * 项目经理能处理 500元以下的申请。
 */
var ProjectManager = /** @class */ (function (_super) {
    __extends(ProjectManager, _super);
    function ProjectManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectManager.prototype.handleRequest = function (user, fee) {
        console.log("项目经理来处理");
        if (fee <= 500) {
            if (user == "anna") {
                return "项目经理同意" + user + "的" + fee + "元申请";
            }
            else {
                return "项目经理拒绝" + user + "的" + fee + "元申请";
            }
        }
        else {
            if (this.getSuccessor() != null) {
                return this.getSuccessor().handleRequest(user, fee);
            }
        }
    };
    return ProjectManager;
}(AHandler_1.AHandler));
exports.ProjectManager = ProjectManager;
