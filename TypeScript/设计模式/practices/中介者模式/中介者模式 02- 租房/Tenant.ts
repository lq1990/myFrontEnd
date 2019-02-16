import { APerson } from './APerson';
import { AMediator } from './AMediator';
export class Tenant extends APerson {
    constructor(name:string, mediator: AMediator) {
        super(name,mediator);
    }

    contact(msg: string){
        this.mediator.contact(msg, this);
    }

    getMsg(msg: string) {
        console.log("租客："+this.name+", 获得信息："+msg);
    }
}