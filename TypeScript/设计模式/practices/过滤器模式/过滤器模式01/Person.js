"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, gender, maritalStatus) {
        this.name = name;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    Person.prototype.getMaritalStatus = function () {
        return this.maritalStatus;
    };
    return Person;
}());
exports.Person = Person;
