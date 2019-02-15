"use strict";
exports.__esModule = true;
var AMeal = /** @class */ (function () {
    function AMeal() {
    }
    AMeal.prototype.setFood = function (f) {
        this.food = f;
    };
    AMeal.prototype.getFood = function () {
        return this.food;
    };
    AMeal.prototype.setDrink = function (d) {
        this.drink = d;
    };
    AMeal.prototype.getDrink = function () {
        return this.drink;
    };
    return AMeal;
}());
exports.AMeal = AMeal;
