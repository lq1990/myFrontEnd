import { IFac } from './IFac';
import { CarA } from './CarA';

export class FacA implements IFac {
    prodCar() {
        return new CarA();
    }

}