import { IEngine } from './IEngine';
import { IAircon } from './IAircon';

export interface IFac {
    prodEngine(): IEngine;
    prodAircon(): IAircon;
}