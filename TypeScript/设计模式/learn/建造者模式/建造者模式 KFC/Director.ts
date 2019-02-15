import { AMealBuilder } from './AMealBuilder';
import { Meal } from './Meal';

export class KFCWaiter {
    private mealBuilder: AMealBuilder;

    constructor(mb: AMealBuilder) {
        this.mealBuilder = mb;
    }

    construct(): Meal {
        this.mealBuilder.buildFood();
        this.mealBuilder.buildDrink();
        return this.mealBuilder.getMeal();
    }
}