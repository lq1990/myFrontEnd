"use strict";
exports.__esModule = true;
var Waiter_1 = require("./Waiter");
var MealC_1 = require("./MealC");
/**
 * 建造者模式：
 * 实现：相同的创建过程，创建不同的产品对象
 */
var w = new Waiter_1.Waiter(new MealC_1.MealC());
var meal = w.construct();
console.log(meal.getDrink());
console.log(meal.getFood());
