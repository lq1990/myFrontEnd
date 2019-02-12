import { Car } from "./Car";

export class TeslaX extends Car {
    description: string="TeslaX";
    cost():number {
        return 1000;
    }
}