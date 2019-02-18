"use strict";
exports.__esModule = true;
var CriteriaMale = /** @class */ (function () {
    function CriteriaMale() {
    }
    CriteriaMale.prototype.meetCriteria = function (persons) {
        var malePersons = [];
        for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
            var p = persons_1[_i];
            if (p.getGender() == "male") {
                malePersons.push(p);
            }
        }
        // console.log("malePersons: ",malePersons);
        return malePersons;
    };
    return CriteriaMale;
}());
exports.CriteriaMale = CriteriaMale;
