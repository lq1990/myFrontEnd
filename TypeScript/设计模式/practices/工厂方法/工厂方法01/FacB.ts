import { IFac } from './IFac';
import { CarB } from './CarB';
export class FacB implements IFac {
    prodCar() {
        return new CarB();
    }

}