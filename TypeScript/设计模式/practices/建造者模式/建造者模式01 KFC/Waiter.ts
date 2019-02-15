import { AMealBuilder } from './AMealBuilder';

export class Waiter {
    private mealbuilder: AMealBuilder;
    
    constructor(meal: AMealBuilder) {
        this.mealbuilder = meal;
    }
    construct() {
        this.mealbuilder.buildDrink();
        this.mealbuilder.buildFood();
        return this.mealbuilder.getMeal();
    }
}