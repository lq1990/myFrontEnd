import { IFac } from './IFac';
import { IEngine } from './IEngine';
import { IAirCon } from './IAirCon';
import { EngineB } from './EngineB';
import { AirConB } from './AirConB';

export class FacB implements IFac {
    produceEngine(): IEngine {
        let eng = new EngineB();
        return eng;
    }
    produceAirCon(): IAirCon {
        let ac = new AirConB();
        return ac;
    }
}