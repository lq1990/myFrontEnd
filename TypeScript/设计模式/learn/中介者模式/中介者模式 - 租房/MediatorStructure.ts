import { AMediator } from './AMediator';
import { HouseOwner } from './HouseOwner';
import { Tenant } from './Tenant';

export class MediatorStructor extends AMediator {
    // 首先，中介必须知道所有房主 和 租房客 的信息
    private houseOwner: HouseOwner;
    private tenant: Tenant;

    getHouseOwner(): HouseOwner {
        return this.houseOwner;
    }
    setHouseOwner(h: HouseOwner) {
        this.houseOwner = h;
    }

    getTenant():Tenant {
        return this.tenant;
    }
    setTenant(t: Tenant) {
        this.tenant = t;
    }
    
    contact(msg: string, person: import("./APerson").APerson) {
        // 房主会获得 关于租客的信息
        if(person==this.houseOwner) {
            this.tenant.getMsg(msg);
        } else {
            // 租客会获得 关于房主的信息
            this.houseOwner.getMsg(msg);
        }
    }

}