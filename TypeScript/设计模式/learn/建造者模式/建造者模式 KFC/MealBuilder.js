"use strict";
exports.__esModule = true;
var Meal_1 = require("./Meal");
var MealBuilder = /** @class */ (function () {
    function MealBuilder() {
        this.meal = new Meal_1.Meal();
    }
    MealBuilder.prototype.getMeal = function () {
        return this.meal;
    };
    return MealBuilder;
}());
exports.MealBuilder = MealBuilder;
