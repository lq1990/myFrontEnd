"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(m) {
        this.method = m;
    }
    Person.prototype.solveProblem = function () {
        this.method.solve();
    };
    return Person;
}());
exports.Person = Person;
