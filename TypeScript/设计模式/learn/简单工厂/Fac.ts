import { Car } from './Car';
import { CarA } from './CarA';
import { CarB } from './CarB';

export class Fac {
    /**
     * 
     * @param type 要生产的车的类型："A", "B"
     */
    createCar(type: string): Car {
        switch (type) {
            case "A":
                return new CarA();
            case "B":
                return new CarB();
            default:
                break;
        }
        return null;
    }
}
