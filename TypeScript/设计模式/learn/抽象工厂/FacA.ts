import { IAbstractFac } from './IAbstractFac';
import { EngineA } from './EngineA';
import { AirconditionA } from './AirconditionA';
import { IEngine } from './IEngine';
import { IAircondition } from './IAircondition';

export class FacA implements IAbstractFac {
  createEngine(): IEngine {
    return new EngineA();
  }
  createAircondition(): IAircondition {
    return new AirconditionA();
  }
}
