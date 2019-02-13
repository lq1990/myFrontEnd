import { IRefer } from './IRefer';
import { Obj } from './Obj';

export class Proxy implements IRefer {
    private obj: Obj = new Obj();
    static numRefer: number;

    addNumRefer() {
        Proxy.numRefer++;
    }
    getNumRefer(): number {
        return Proxy.numRefer;
    }
    refer() {
        this.obj.refer();

        this.addNumRefer();
        console.log("引用obj的次数："+this.getNumRefer());
    }

}