"use strict";
exports.__esModule = true;
var CriteriaMale = /** @class */ (function () {
    function CriteriaMale() {
    }
    CriteriaMale.prototype.meetCriteria = function (persons) {
        this.list = []; // 初始化为空。其实这种方式，不如不设置 private list对象，而是直接在 这个大括号里用let 定义。
        for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
            var p = persons_1[_i];
            if (p.getGender() == "male") {
                this.list.push(p);
            }
        }
        return this.list;
    };
    return CriteriaMale;
}());
exports.CriteriaMale = CriteriaMale;
