import { CarA } from "./CarA";
import { CarB } from './CarB';

export class Fac {
    prodCar(type: string) {
        switch (type) {
            case "A":
                return new CarA();
            case "B":
                return new CarB();
            default:
                break;
        }
    }
}