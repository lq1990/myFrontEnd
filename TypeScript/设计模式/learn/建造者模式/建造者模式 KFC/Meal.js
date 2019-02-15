"use strict";
exports.__esModule = true;
var Meal = /** @class */ (function () {
    function Meal() {
    }
    Meal.prototype.getFood = function () {
        return this.food;
    };
    Meal.prototype.setFood = function (f) {
        this.food = f;
    };
    Meal.prototype.getDrink = function () {
        return this.drink;
    };
    Meal.prototype.setDrink = function (d) {
        this.drink = d;
    };
    return Meal;
}());
exports.Meal = Meal;
