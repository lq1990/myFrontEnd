import { IAircon } from './IAircon';

export class AirconB implements IAircon {
    airconWork() {
        console.log("airconB works");
    }
    constructor(){
        console.log("produce AirCondition B");
        this.airconWork();
    }
}
