import { IAbstractFac } from './IAbstractFac';
import { EngineB } from './EngineB';
import { AirconditionB } from './AirconditionB';
import { IEngine } from './IEngine';
import { IAircondition } from './IAircondition';

export class FacB implements IAbstractFac {
  createEngine(): IEngine {
    return new EngineB();
  }
  createAircondition(): IAircondition {
    return new AirconditionB();
  }
}
