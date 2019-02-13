import { IFac } from './IFac';
import { CarA } from './CarA';
import { TireA } from './TireA';

export class FacA implements IFac {
  prodCar() {
    return new CarA();
  }
  prodTire() {
    return new TireA();
  }
}
