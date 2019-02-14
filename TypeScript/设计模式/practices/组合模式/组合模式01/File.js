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
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    File.prototype.add = function (c) {
        throw new Error('Method not implemented.');
    };
    File.prototype.remove = function (c) {
        throw new Error('Method not implemented.');
    };
    File.prototype.read = function () {
        console.log(this.name + "读文件");
    };
    return File;
}(ARead_1.ARead));
exports.File = File;
