import { IFac } from './IFac';
import { EngineB } from './EngineB';
import { AirconB } from './ArconB';

export class FacB implements IFac {
  prodEngine(): import('./IEngine').IEngine {
    return new EngineB();
  }
  prodAircon(): import('./IAircon').IAircon {
    return new AirconB();
  }
}
