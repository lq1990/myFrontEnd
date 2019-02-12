import { Car } from "./Car";

export abstract class CarOption extends Car {
    desctiption:string;
    abstract getDes():string;
    abstract cost():number;
}