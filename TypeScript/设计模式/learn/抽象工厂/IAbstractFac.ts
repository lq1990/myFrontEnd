import { IEngine } from './IEngine';
import { IAircondition } from './IAircondition';

export interface IAbstractFac {
    createEngine() : IEngine;
    createAircondition(): IAircondition;
}