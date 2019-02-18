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
var AGame_1 = require("./AGame");
var Basketball = /** @class */ (function (_super) {
    __extends(Basketball, _super);
    function Basketball() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Basketball.prototype.init = function () {
        console.log("篮球运动准备");
    };
    Basketball.prototype.start = function () {
        console.log("篮球运动开始");
    };
    Basketball.prototype.end = function () {
        console.log("篮球运动结束");
    };
    return Basketball;
}(AGame_1.AGame));
exports.Basketball = Basketball;
