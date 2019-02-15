"use strict";
exports.__esModule = true;
var Director = /** @class */ (function () {
    function Director(b) {
        this.builder = b;
    }
    Director.prototype.setBuilder = function (b) {
        this.builder = b;
    };
    Director.prototype.construct = function () {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
        return this.builder.getResult();
    };
    return Director;
}());
exports.Director = Director;
