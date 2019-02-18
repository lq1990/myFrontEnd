import { AFlyweight } from './AFlyweight';
import { ConFlyweight } from './ConFlyweight';

export class FlyweightFac {
    private flyweights = {};
    
    constructor(){

    }

    getFlyweight(obj: string):AFlyweight  {
        let fw: AFlyweight = <AFlyweight> this.flyweights[obj];
        if(fw==null){
            fw = new ConFlyweight(<string>obj);
            this.flyweights[obj]=fw;
        }
        return fw;
    }

    getFlyweightInfo(): Object {
        let size: number = Object.keys(this.flyweights).length;
    
        return {"content": this.flyweights, "size:": size};
    }
}