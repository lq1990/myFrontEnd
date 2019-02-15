"use strict";
exports.__esModule = true;
var Waiter_1 = require("./Waiter");
var MealB_1 = require("./MealB");
/**
 * 建造者模式：
 * 将部件和组装过程分开，一步一步创建复杂的对象。
 */
var di = new Waiter_1.Waiter(new MealB_1.MealB());
var meal = di.construct();
console.log(meal.getDrink());
console.log(meal.getFood());
