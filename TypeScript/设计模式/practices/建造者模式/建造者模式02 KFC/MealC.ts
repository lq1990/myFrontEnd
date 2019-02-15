import { AMealBuilder } from './AMealBuilder';
export class MealC extends AMealBuilder {
  buildFood() {
    this.meal.setFood("薯条");
  }
  buildDrink() {
    this.meal.setDrink("西瓜汁")
  }
}
