import { IFac } from './IFac';
import { EngineB } from "./EngineB";
import { AirconB } from './AirconB';

export class FacB implements IFac {
  pordEngine(): import('./IEngine').IEngine {
    return new EngineB();
  }
  prodAircon(): import('./IAircon').IAircon {
    return new AirconB();
  }
}
