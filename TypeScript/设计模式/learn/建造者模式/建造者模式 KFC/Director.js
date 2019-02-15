"use strict";
exports.__esModule = true;
var KFCWaiter = /** @class */ (function () {
    function KFCWaiter(mb) {
        this.mealBuilder = mb;
    }
    KFCWaiter.prototype.construct = function () {
        this.mealBuilder.buildFood();
        this.mealBuilder.buildDrink();
        return this.mealBuilder.getMeal();
    };
    return KFCWaiter;
}());
exports.KFCWaiter = KFCWaiter;
