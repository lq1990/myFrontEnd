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
var ASport_1 = require("./ASport");
var Football = /** @class */ (function (_super) {
    __extends(Football, _super);
    function Football() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Football.prototype.init = function () {
        console.log("足球运动，初始化");
    };
    Football.prototype.start = function () {
        console.log("足球开始");
    };
    Football.prototype.end = function () {
        console.log("足球结束");
    };
    return Football;
}(ASport_1.ASport));
exports.Football = Football;
