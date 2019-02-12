import { IEngine } from './IEngine';
export class EngineA implements IEngine {
    constructor() {
        console.log("制造 引擎A");
    }
}