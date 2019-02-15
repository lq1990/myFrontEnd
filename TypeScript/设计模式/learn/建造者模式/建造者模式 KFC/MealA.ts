import { AMealBuilder } from './AMealBuilder';

export class MealA extends AMealBuilder {
    buildFood(): void {
        this.meal.setFood("薯条");
    }
    buildDrink(){
        this.meal.setDrink("可乐");
    }
}