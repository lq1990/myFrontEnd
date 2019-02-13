import { IFac } from './IFac';
import { EngineA } from './EngineA';
import { AirconA } from './AirconA';

export class FacA implements IFac {
  prodEngine(): import('./IEngine').IEngine {
    return new EngineA();
  }
  prodAircon(): import('./IAircon').IAircon {
    return new AirconA();
  }
}
