import { IAircon } from './IAircon';
export class AirconA implements IAircon {
    airconWork() {
        console.log("airconA works");
    }
    constructor(){
        console.log("produce AirCondition A");
        this.airconWork();
    }
}