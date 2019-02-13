import { IFac } from './IFac';
import { CarB } from './CarB';
import { TireB } from './TireB';

export class FacB implements IFac {
  prodCar() {
    return new CarB();
  }
  prodTire() {
    return new TireB();
  }
}
