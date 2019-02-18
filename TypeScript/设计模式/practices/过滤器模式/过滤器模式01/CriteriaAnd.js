"use strict";
exports.__esModule = true;
var CriteriaAnd = /** @class */ (function () {
    function CriteriaAnd(firstCri, secondCri) {
        this.firstCri = firstCri;
        this.secondCri = secondCri;
    }
    CriteriaAnd.prototype.meetCriteria = function (persons) {
        var firstCriPs = this.firstCri.meetCriteria(persons);
        var andCriPs = this.secondCri.meetCriteria(firstCriPs);
        return andCriPs;
    };
    return CriteriaAnd;
}());
exports.CriteriaAnd = CriteriaAnd;
