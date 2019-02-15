import { AMealBuilder } from './AMealBuilder';
export class MealA extends AMealBuilder {
  buildFood() {
    this.meal.setFood('鸡翅');
  }
  buildDrink() {
    this.meal.setDrink('可乐');
  }
}
