import { IFac } from './IFac';
import { EngineA } from './EngineA';
import { AirConA } from './AirConA';
import { IEngine } from './IEngine';
import { IAirCon } from './IAirCon';

export class FacA implements IFac {
    produceEngine(): IEngine {
        let engA = new EngineA();
        return engA;
    }
    produceAirCon(): IAirCon {
        let airconA = new AirConA();
        return airconA;
    }
}