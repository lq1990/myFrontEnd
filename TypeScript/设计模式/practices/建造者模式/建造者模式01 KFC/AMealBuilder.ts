import { AMeal } from './AMeal';

export abstract class  AMealBuilder {
    protected meal: AMeal = new AMeal();

    abstract buildFood();
    abstract buildDrink();

    getMeal() {
        return this.meal;
    }
}