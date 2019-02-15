"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getHead = function () {
        return this.head;
    };
    Person.prototype.setHead = function (h) {
        this.head = h;
    };
    Person.prototype.getBody = function () {
        return this.body;
    };
    Person.prototype.setBody = function (b) {
        this.body = b;
    };
    Person.prototype.getFoot = function () {
        return this.foot;
    };
    Person.prototype.setFoot = function (f) {
        this.foot = f;
    };
    return Person;
}());
exports.Person = Person;
