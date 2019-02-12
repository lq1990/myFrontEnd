import { IPower5V } from "./IPower5V";
import { Power220V } from "./Power220V";

export class PowerAdapter extends Power220V implements IPower5V {
    getPower5V() {
        super.getPower220V();
        this.transform();
        console.log("got 5V...");
    }
    transform(): any {
        console.log("220V -> 5V");
    }
}