import { Fac } from './Fac';
import { CarA } from './CarA';
export class FacA extends Fac {
    createCar() {
        return new CarA();
    }

}