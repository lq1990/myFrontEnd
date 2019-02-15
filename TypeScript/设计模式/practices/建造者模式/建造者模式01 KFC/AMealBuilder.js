"use strict";
exports.__esModule = true;
var AMeal_1 = require("./AMeal");
var AMealBuilder = /** @class */ (function () {
    function AMealBuilder() {
        this.meal = new AMeal_1.AMeal();
    }
    AMealBuilder.prototype.getMeal = function () {
        return this.meal;
    };
    return AMealBuilder;
}());
exports.AMealBuilder = AMealBuilder;
