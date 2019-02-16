import { AMediator } from './AMediator';
import { Tenant } from './Tenant';
import { HouseOwner } from './HouseOwner';

export class Mediator extends AMediator {
  private houseowner: HouseOwner;
  private tenant: Tenant;

  setHouseOwner(h: HouseOwner) {
    this.houseowner = h;
  }
  getHouseOwner() {
    return this.houseowner;
  }

  setTenant(t: Tenant) {
    this.tenant = t;
  }
  getTenant() {
    return this.tenant;
  }
  contact(msg: string, p: import('./APerson').APerson) {
    if (p == this.houseowner) {
      this.tenant.getMsg(msg);
    } else {
      this.houseowner.getMsg(msg);
    }
  }
}
