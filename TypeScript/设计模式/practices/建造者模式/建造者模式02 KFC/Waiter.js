"use strict";
exports.__esModule = true;
var Waiter = /** @class */ (function () {
    function Waiter(mb) {
        this.mealbuilder = mb;
    }
    Waiter.prototype.construct = function () {
        this.mealbuilder.buildDrink();
        this.mealbuilder.buildFood();
        return this.mealbuilder.getMeal();
    };
    return Waiter;
}());
exports.Waiter = Waiter;
