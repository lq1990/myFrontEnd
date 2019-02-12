import { Car } from "./Car";

export class TeslaS extends Car {
    description: string="TeslaS";
    cost():number  {
        return 2000;
    }
}