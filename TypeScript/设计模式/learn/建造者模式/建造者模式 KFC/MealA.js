"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AMealBuilder_1 = require("./AMealBuilder");
var MealA = /** @class */ (function (_super) {
    __extends(MealA, _super);
    function MealA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MealA.prototype.buildFood = function () {
        this.meal.setFood("薯条");
    };
    MealA.prototype.buildDrink = function () {
        this.meal.setDrink("可乐");
    };
    return MealA;
}(AMealBuilder_1.AMealBuilder));
exports.MealA = MealA;
