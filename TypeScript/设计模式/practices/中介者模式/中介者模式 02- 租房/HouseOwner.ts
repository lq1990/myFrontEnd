import { APerson } from './APerson';
import { AMediator } from './AMediator';
export class HouseOwner extends APerson {
    constructor(name: string, m: AMediator) {
        super(name,m);
    }

    contact(msg:string){
        this.mediator.contact(msg, this);
    }
    
    getMsg(msg: string) {
        console.log("房主："+this.name+", 获得信息："+msg);
    }
   

}