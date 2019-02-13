import { Fac } from './Fac';
import { CarB } from './CarB';

export class FacB extends Fac {
    createCar() {
        return new CarB();
    }

}