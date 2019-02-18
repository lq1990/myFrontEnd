"use strict";
exports.__esModule = true;
var CriteriaSingle = /** @class */ (function () {
    function CriteriaSingle() {
    }
    CriteriaSingle.prototype.meetCriteria = function (persons) {
        this.list = [];
        for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
            var p = persons_1[_i];
            if (p.getMaritalStatus() == "single") {
                this.list.push(p);
            }
        }
        return this.list;
    };
    return CriteriaSingle;
}());
exports.CriteriaSingle = CriteriaSingle;
