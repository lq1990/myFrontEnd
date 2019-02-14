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
var Offcier = /** @class */ (function (_super) {
    __extends(Offcier, _super);
    function Offcier(name) {
        var _this = _super.call(this) || this;
        _this.list = [];
        _this.name = name;
        return _this;
    }
    Offcier.prototype.add = function (c) {
        console.log(c);
        this.list.push(c);
    };
    Offcier.prototype.remove = function (c) {
        var idx = this.list.indexOf(c);
        this.list.splice(idx, 1);
    };
    Offcier.prototype.count = function () {
        console.log(this.list);
        console.log(this.name + ' 军官报数');
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var c = _a[_i];
            // 若c是 军官，此军官会被遍历
            // 若c是 小兵，直接报数。
            console.log("c是：");
            console.log(c);
            console.log("\n");
            c.count(); // Officier.count(), Soldier.count()
        }
    };
    return Offcier;
}(ACount_1.ACount));
exports.Offcier = Offcier;
