import { IFac } from './IFac';
import { CarC } from './CarC';
import { TireC } from './TireC';
export class FacC implements IFac {
  prodCar() {
    return new CarC();
  }
  prodTire() {
    return new TireC();
  }
}
