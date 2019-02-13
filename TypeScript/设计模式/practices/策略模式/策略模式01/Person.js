"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(t) {
        this.type = t;
    }
    Person.prototype.takeAHoliday = function () {
        console.log("take a holiday...");
        this.type.travel();
    };
    return Person;
}());
exports.Person = Person;
