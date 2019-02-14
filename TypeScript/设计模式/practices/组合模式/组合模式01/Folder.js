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
var ARead_1 = require("./ARead");
var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder(name) {
        var _this = _super.call(this) || this;
        _this.list = [];
        _this.name = name;
        return _this;
    }
    Folder.prototype.add = function (c) {
        this.list.push(c);
    };
    Folder.prototype.remove = function (c) {
        var idx = this.list.indexOf(c);
        this.list.splice(idx, 1);
    };
    Folder.prototype.read = function () {
        console.log(this.name + "读文件夹");
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var c = _a[_i];
            c.read();
        }
    };
    return Folder;
}(ARead_1.ARead));
exports.Folder = Folder;
