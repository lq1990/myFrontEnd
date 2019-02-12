import { CarOption } from "./CarOption";
import { Car } from './Car';

export class EnhancedPilot extends CarOption {
    decCar: Car;
    constructor(name:Car) {
        super();
        this.decCar = name;
    }
    getDes():string {
        return this.decCar.getDes()+" is enhanced.";
    }
    cost():number {
        return this.decCar.cost() + 100;
    }
}