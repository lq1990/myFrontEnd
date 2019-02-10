import { Car } from "./Car";

export class TeslaS extends Car {
    desctiption:string = "TeslaS";
    
    cost():number {
        return 2000;
    }
}