"use strict";
exports.__esModule = true;
/**
 * 或运算，并集
 */
var OrCriteria = /** @class */ (function () {
    function OrCriteria(c, oth) {
        this.criteria = c;
        this.otherCriteria = oth;
    }
    OrCriteria.prototype.meetCriteria = function (persons) {
        var firstCriteriaItems = this.criteria.meetCriteria(persons);
        var otherCriteriaItems = this.otherCriteria.meetCriteria(persons);
        var _loop_1 = function (p) {
            // 遍历 other中元素，如果不存在于first中，就添加到first中去。
            var temp = 0;
            firstCriteriaItems.forEach(function (item, idx) {
                if (p.getName() == item.getName()) {
                    // 此时说明：p存在于 first中
                    temp = 1;
                    return;
                }
            });
            if (temp == 0) {
                // temp若没变，说明p不在first中。若不在，则push到first中。
                firstCriteriaItems.push(p);
            }
        };
        for (var _i = 0, otherCriteriaItems_1 = otherCriteriaItems; _i < otherCriteriaItems_1.length; _i++) {
            var p = otherCriteriaItems_1[_i];
            _loop_1(p);
        }
        return firstCriteriaItems;
    };
    return OrCriteria;
}());
exports.OrCriteria = OrCriteria;
