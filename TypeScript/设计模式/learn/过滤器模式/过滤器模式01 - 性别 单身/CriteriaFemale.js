"use strict";
exports.__esModule = true;
var CriteriaFeMale = /** @class */ (function () {
    function CriteriaFeMale() {
    }
    CriteriaFeMale.prototype.meetCriteria = function (persons) {
        var femalePersons = [];
        for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
            var p = persons_1[_i];
            if (p.getGender() == "female") {
                femalePersons.push(p);
            }
        }
        return femalePersons;
    };
    return CriteriaFeMale;
}());
exports.CriteriaFeMale = CriteriaFeMale;
