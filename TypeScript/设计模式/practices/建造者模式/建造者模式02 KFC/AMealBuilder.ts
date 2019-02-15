import { Meal } from './Meal';

export abstract class AMealBuilder {
    protected meal: Meal = new Meal();

    abstract buildFood();
    abstract buildDrink();

    getMeal(){
        return this.meal;
    }
}