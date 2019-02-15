import { AMealBuilder } from './AMealBuilder';
export class MealB extends AMealBuilder {
  buildFood() {
    this.meal.setFood('汉堡');
  }
  buildDrink() {
    this.meal.setDrink('苹果汁')
  }
}
