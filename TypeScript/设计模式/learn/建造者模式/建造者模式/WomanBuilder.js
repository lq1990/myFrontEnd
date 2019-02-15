"use strict";
exports.__esModule = true;
var Woman_1 = require("./Woman");
var WomanBuilder = /** @class */ (function () {
    function WomanBuilder() {
        this.person = new Woman_1.Woman();
    }
    WomanBuilder.prototype.buildHead = function () {
        console.log('建造女人的头');
    };
    WomanBuilder.prototype.buildBody = function () {
        console.log('建造女人的身体');
    };
    WomanBuilder.prototype.buildFoot = function () {
        console.log('建造女人的脚');
    };
    WomanBuilder.prototype.buildPerson = function () {
        return this.person;
    };
    return WomanBuilder;
}());
exports.WomanBuilder = WomanBuilder;
