"use strict";
exports.__esModule = true;
var CriteriaOr = /** @class */ (function () {
    function CriteriaOr(firstCri, secondCri) {
        this.firstCri = firstCri;
        this.secondCri = secondCri;
    }
    CriteriaOr.prototype.meetCriteria = function (persons) {
        var firstCriPs = this.firstCri.meetCriteria(persons);
        var secondCriPs = this.secondCri.meetCriteria(persons);
        var _loop_1 = function (p1) {
            var temp = 0;
            secondCriPs.forEach(function (item2, idx) {
                if (p1.getName() == item2.getName()) {
                    temp = 1;
                    return;
                }
            });
            if (temp == 0) {
                // 说明p1不在 sec中，则push到sec中。
                secondCriPs.push(p1);
            }
        };
        for (var _i = 0, firstCriPs_1 = firstCriPs; _i < firstCriPs_1.length; _i++) {
            var p1 = firstCriPs_1[_i];
            _loop_1(p1);
        }
        return secondCriPs;
    };
    return CriteriaOr;
}());
exports.CriteriaOr = CriteriaOr;
