"use strict";
exports.__esModule = true;
var Meal_1 = require("./Meal");
var AMealBuilder = /** @class */ (function () {
    function AMealBuilder() {
        this.meal = new Meal_1.Meal();
    }
    AMealBuilder.prototype.getMeal = function () {
        return this.meal;
    };
    return AMealBuilder;
}());
exports.AMealBuilder = AMealBuilder;
