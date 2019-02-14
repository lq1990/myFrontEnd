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
var ACount_1 = require("./ACount");
var Soldier = /** @class */ (function (_super) {
    __extends(Soldier, _super);
    function Soldier(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Soldier.prototype.add = function (c) {
        throw new Error('Method not implemented.');
    };
    Soldier.prototype.remove = function (c) {
        throw new Error('Method not implemented.');
    };
    Soldier.prototype.count = function () {
        console.log(this.name + ' 小兵报数');
    };
    return Soldier;
}(ACount_1.ACount));
exports.Soldier = Soldier;
