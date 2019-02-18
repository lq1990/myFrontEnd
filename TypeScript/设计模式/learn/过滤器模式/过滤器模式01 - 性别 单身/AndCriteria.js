"use strict";
exports.__esModule = true;
/**
 * 交集
 */
var AndCriteria = /** @class */ (function () {
    function AndCriteria(c, oth) {
        this.criteria = c;
        this.otherCriteria = oth;
    }
    AndCriteria.prototype.meetCriteria = function (persons) {
        var firstCriteriaPersons = this.criteria.meetCriteria(persons);
        return this.otherCriteria.meetCriteria(firstCriteriaPersons);
    };
    return AndCriteria;
}());
exports.AndCriteria = AndCriteria;
