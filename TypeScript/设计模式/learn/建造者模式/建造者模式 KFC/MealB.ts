import { AMealBuilder } from './AMealBuilder';

export class MealB extends AMealBuilder {
    buildFood(): void {
        this.meal.setFood("鸡翅");
    }
    buildDrink(){
        this.meal.setDrink("柠檬");
    }
}