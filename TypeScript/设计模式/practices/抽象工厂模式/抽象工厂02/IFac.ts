import { IEngine } from './IEngine';
import { IAircon } from './IAircon';

export interface IFac {
    pordEngine(): IEngine;
    prodAircon(): IAircon;
}