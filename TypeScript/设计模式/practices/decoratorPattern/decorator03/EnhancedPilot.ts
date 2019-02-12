import { CarOption } from './CarOption';
import { Car } from "./Car";

export class EnhancedPilot extends CarOption {
    enCar:Car;
    constructor(name:Car) {
        super();
        this.enCar = name;
    }
    getDes():string {
        return this.enCar.getDes()+" Its pilot is enhanced.";
    }
    cost():number {
        return this.enCar.cost()+100;
    }
}