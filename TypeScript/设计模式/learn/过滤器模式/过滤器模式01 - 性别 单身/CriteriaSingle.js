"use strict";
exports.__esModule = true;
var CriteralSingle = /** @class */ (function () {
    function CriteralSingle() {
    }
    CriteralSingle.prototype.meetCriteria = function (persons) {
        var singlePersons = [];
        for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
            var p = persons_1[_i];
            if (p.getMaritalStatus() == "single") {
                singlePersons.push(p);
            }
        }
        return singlePersons;
    };
    return CriteralSingle;
}());
exports.CriteralSingle = CriteralSingle;
