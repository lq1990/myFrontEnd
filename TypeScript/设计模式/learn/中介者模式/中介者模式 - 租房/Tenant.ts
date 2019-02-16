import { APerson } from './APerson';
import { AMediator } from './AMediator';

export class Tenant extends APerson {
    constructor(name: string, m: AMediator) {
        super(name, m);
    }

    /**
     * 与中介者联系
     * @param msg 
     */
    contact(msg:string){
        this.mediator.contact(msg, this);
    }

    getMsg(msg:string){
        console.log("租房客："+this.name+", 获得信息："+msg);
    }
}