import { IEngine } from './IEngine';
export class EngineA implements IEngine {
    engineWork() {
        console.log("engineA works");
    }
    constructor(){
        console.log("produce engineA");
    }
}