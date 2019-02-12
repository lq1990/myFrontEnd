import { IPower5V } from "./IPower5V";
import { Power220V } from "./Power220V";

export class PowerAdapter implements IPower5V {
    private pow220: Power220V;

    constructor(pow: Power220V){
        this.pow220 = pow;
    }

    getPower5V() {
        this.pow220.getPower220V();
        this.transform();
        console.log("get 5V");
    }
    transform(): any {
        console.log("220 -> 5");
    }

}

// 对象适配器