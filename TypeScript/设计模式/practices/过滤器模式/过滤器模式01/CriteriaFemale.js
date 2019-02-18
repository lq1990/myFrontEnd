"use strict";
exports.__esModule = true;
var CriteriaFemale = /** @class */ (function () {
    function CriteriaFemale() {
    }
    CriteriaFemale.prototype.meetCriteria = function (persons) {
        this.list = [];
        for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
            var p = persons_1[_i];
            if (p.getGender() == "female") {
                this.list.push(p);
            }
        }
        return this.list;
    };
    return CriteriaFemale;
}());
exports.CriteriaFemale = CriteriaFemale;
