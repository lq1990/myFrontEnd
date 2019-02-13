import { IFac } from './IFac';
import { CarC } from './CarC';
export class FacC implements IFac {
    prodCar() {
        return new CarC();
    }

}