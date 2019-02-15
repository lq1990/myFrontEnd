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
var Bachelor = /** @class */ (function (_super) {
    __extends(Bachelor, _super);
    function Bachelor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bachelor.prototype.accept = function (v) {
        v.visit(this);
    };
    return Bachelor;
}(AStudent_1.AStudent));
exports.Bachelor = Bachelor;
