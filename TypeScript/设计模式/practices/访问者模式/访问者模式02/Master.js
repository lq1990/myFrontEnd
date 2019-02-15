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
var AStudent_1 = require("./AStudent");
var Master = /** @class */ (function (_super) {
    __extends(Master, _super);
    function Master() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Master.prototype.accept = function (v) {
        console.log("master学生 不接受访问！");
    };
    return Master;
}(AStudent_1.AStudent));
exports.Master = Master;
