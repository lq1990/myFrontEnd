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
var AMarket_1 = require("./AMarket");
var Branch = /** @class */ (function (_super) {
    __extends(Branch, _super);
    function Branch(s) {
        var _this = _super.call(this) || this;
        _this.list = [];
        _this.name = s;
        return _this;
    }
    Branch.prototype.add = function (m) {
        this.list.push(m);
    };
    Branch.prototype.remove = function (m) {
        var idx = this.list.indexOf(m);
        this.list.splice(idx, 1);
    };
    Branch.prototype.payByCard = function () {
        //   console.log(this.list);
        console.log(this.name + " 消费，积分累计到会员卡了！");
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var m = _a[_i];
            console.log("m如下：====================");
            console.log(m);
            console.log("m如上=====================\n");
            m.payByCard();
        }
    };
    return Branch;
}(AMarket_1.AMarket));
exports.Branch = Branch;
