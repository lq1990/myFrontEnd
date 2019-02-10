import { Car } from './Car';

export abstract class CarOption extends Car {
    abstract getDes():string;
    abstract cost():number;
}