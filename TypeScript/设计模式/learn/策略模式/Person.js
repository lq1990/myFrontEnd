"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(t) {
        this.travel = t;
    }
    Person.prototype.takeHoliday = function () {
        console.log("去度假");
        this.travel.travel();
    };
    return Person;
}());
exports.Person = Person;
