import { IEngine } from './IEngine';
export class EngineB implements IEngine {
    engineWork() {
        console.log("engineB works");
    }
    constructor(){
        console.log("produce engineB");
    }
}