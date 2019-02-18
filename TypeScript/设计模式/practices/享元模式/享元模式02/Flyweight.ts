import { FontFac } from './FontFac';
export class Flyweight {
    private fontPool: Object = {};

    getOneFont(k: string){
        if(!this.fontPool[k]) {
            let val = new FontFac(k);
            this.fontPool[k] = val;
        }
        return this.fontPool[k];
    }

    getPoolInfo() {
        let size = Object.keys(this.fontPool).length;
        return {"pool-content":this.fontPool, size: size};
    }
}