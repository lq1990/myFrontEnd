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
var MealB = /** @class */ (function (_super) {
    __extends(MealB, _super);
    function MealB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MealB.prototype.buildFood = function () {
        this.meal.setFood('汉堡');
    };
    MealB.prototype.buildDrink = function () {
        this.meal.setDrink('苹果汁');
    };
    return MealB;
}(AMealBuilder_1.AMealBuilder));
exports.MealB = MealB;
