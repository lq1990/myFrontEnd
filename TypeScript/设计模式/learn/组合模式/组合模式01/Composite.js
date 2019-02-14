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
var Component_1 = require("./Component");
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = [];
        return _this;
    }
    Composite.prototype.add = function (c) {
        this.list.push(c);
    };
    Composite.prototype.remove = function (c) {
        var idx = this.list.indexOf(c);
        this.list.splice(idx, 1);
    };
    Composite.prototype.eachChild = function () {
        console.log(this.name + "执行了");
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var c = _a[_i];
            c.eachChild();
        }
    };
    return Composite;
}(Component_1.Component));
exports.Composite = Composite;
