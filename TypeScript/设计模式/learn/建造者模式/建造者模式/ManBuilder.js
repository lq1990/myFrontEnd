"use strict";
exports.__esModule = true;
var Man_1 = require("./Man");
var ManBuilder = /** @class */ (function () {
    function ManBuilder() {
        this.person = new Man_1.Man();
    }
    ManBuilder.prototype.buildHead = function () {
        console.log('建造男人的头');
    };
    ManBuilder.prototype.buildBody = function () {
        console.log('建造男人的身体');
    };
    ManBuilder.prototype.buildFoot = function () {
        console.log('建造男人的脚');
    };
    ManBuilder.prototype.buildPerson = function () {
        return this.person;
    };
    return ManBuilder;
}());
exports.ManBuilder = ManBuilder;
