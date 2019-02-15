import { MealA } from "./MealA";
import { KFCWaiter } from './Director';

/**
 * 建造者模式 - KFC套餐
 * 套餐是一个复杂对象，含有多个部分，
 * 不同的套餐有不同的组成，
 * 而服务员可以根据顾客的要求，一步一步装配。
 */
let waiter: KFCWaiter = new KFCWaiter(new MealA());

let mealA = waiter.construct();

console.log(mealA.getDrink());
console.log(mealA.getFood());
