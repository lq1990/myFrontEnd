import { AMediator } from './AMediator';
import { HouseOwner } from './HouseOwner';
import { Tenant } from './Tenant';

export class Mediator extends AMediator {
    private houseowner: HouseOwner;
    private tenant: Tenant;

    setHouseOwner(h: HouseOwner){
        this.houseowner = h;
    }
    setTenant(t: Tenant) {
        this.tenant = t;
    }
    
    getPsMsg(msg: string, p: import("./APerson").APerson) {
        if(p==this.houseowner) {
            // 中介拿到p的消息后，如果p是房主，拿到房主的消息后，让租客得到这个消息
            this.tenant.getMsg(msg);
        } else {
            this.houseowner.getMsg(msg);
        }
    }
}