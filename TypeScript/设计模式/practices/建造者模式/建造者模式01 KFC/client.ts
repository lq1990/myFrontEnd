import { Waiter } from './Waiter';
import { MealA } from './MealA';
import { MealB } from './MealB';
/**
 * 建造者模式：
 * 将部件和组装过程分开，一步一步创建复杂的对象。
 */
let di = new Waiter(new MealB());
let meal = di.construct();

console.log(meal.getDrink());
console.log(meal.getFood());