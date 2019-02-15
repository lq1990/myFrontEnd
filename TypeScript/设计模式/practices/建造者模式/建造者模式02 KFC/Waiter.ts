import { AMealBuilder } from './AMealBuilder';
export class Waiter {
    private mealbuilder: AMealBuilder;
    constructor(mb: AMealBuilder) {
        this.mealbuilder = mb;
    }

    construct(){
        this.mealbuilder.buildDrink();
        this.mealbuilder.buildFood();
        return this.mealbuilder.getMeal();
    }
}