import { Waiter } from './Waiter';
import { MealA } from './MealA';
import { MealB } from './MealB';
import { MealC } from './MealC';
/**
 * 建造者模式：
 * 实现：相同的创建过程，创建不同的产品对象
 */
let w = new Waiter(new MealC());
let meal = w.construct();
console.log(meal.getDrink());
console.log(meal.getFood());