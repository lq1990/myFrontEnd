import { FontFactory } from './FontFactory';

export class Flyweight {
    private fontpool: Object = {};

    getOneFontFromPool(k: string): FontFactory{
        if(!this.fontpool[k]) {
            let val: FontFactory = new FontFactory(k);
            this.fontpool[k]=val;
        }
        return this.fontpool[k];
    }

    getPoolInfo() {
        let size= Object.keys(this.fontpool).length;
        return {"fontpool-content": this.fontpool, "size": size};
    }
}