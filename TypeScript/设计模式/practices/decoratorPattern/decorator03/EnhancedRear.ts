import { CarOption } from './CarOption';
import { Car } from "./Car";

export class EnhancedRear extends CarOption {
    enCar:Car;
    constructor(name:Car) {
        super();
        this.enCar = name;
    }
    getDes():string {
        return this.enCar.getDes()+" Its rear is enhanced.";
    }
    cost():number {
        return this.enCar.cost()+200;
    }
}