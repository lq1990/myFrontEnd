"use strict";
exports.__esModule = true;
var AStudent = /** @class */ (function () {
    function AStudent() {
    }
    AStudent.prototype.getName = function () {
        return this.name;
    };
    AStudent.prototype.setName = function (name) {
        this.name = name;
    };
    AStudent.prototype.getUni = function () {
        return this.uni;
    };
    AStudent.prototype.setUni = function (u) {
        this.uni = u;
    };
    AStudent.prototype.getRating = function () {
        return this.rating;
    };
    AStudent.prototype.setRating = function (r) {
        this.rating = r;
    };
    return AStudent;
}());
exports.AStudent = AStudent;
