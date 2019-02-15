"use strict";
exports.__esModule = true;
var MealA_1 = require("./MealA");
var Director_1 = require("./Director");
/**
 * 建造者模式 - KFC套餐
 * 套餐是一个复杂对象，含有多个部分，
 * 不同的套餐有不同的组成，
 * 而服务员可以根据顾客的要求，一步一步装配。
 */
var waiter = new Director_1.KFCWaiter(new MealA_1.MealA());
var mealA = waiter.construct();
console.log(mealA.getDrink());
console.log(mealA.getFood());
