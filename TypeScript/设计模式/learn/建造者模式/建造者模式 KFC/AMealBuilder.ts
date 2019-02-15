import { Meal } from './Meal';
export abstract class AMealBuilder {
    meal: Meal = new Meal();

    abstract buildFood(): void;
    abstract buildDrink(): void;

    getMeal(): Meal{
        return this.meal;
    }
}