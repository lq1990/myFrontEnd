import { HouseOwner } from './HouseOwner';
import { Tenant } from './Tenant';
import { APerson } from './APerson';

export  class Mediator {
    private houseowner: HouseOwner;
    private tenant: Tenant;

    setHouseOwner(h: HouseOwner) {
        this.houseowner = h;
    }
    setTenant(t: Tenant){
        this.tenant = t;
    }

    getPsMsg(msg: string, p: APerson) {
        if(p==this.houseowner) {
            this.tenant.getMsg(msg);
        } else {
            this.houseowner.getMsg(msg);
        }
    }
}