import { Car } from "./Car";

export class TeslaX extends Car {
    desctiption:string = "TeslaX";
    
    cost():number {
        return 1000;
    }
}