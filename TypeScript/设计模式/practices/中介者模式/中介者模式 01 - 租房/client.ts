import { Mediator } from './Mediator';
import { HouseOwner } from './HouseOwner';
import { Tenant } from './Tenant';
/**
 * 中介者模式：
 * 以租房为例，房主和租房客
 */
let mediator = new Mediator();
let houseowner1 = new HouseOwner('anna', mediator);
let tenant1 = new Tenant('李四', mediator);

mediator.setHouseOwner(houseowner1);
mediator.setTenant(tenant1);

houseowner1.sendMsg('我是房主，要租房');
tenant1.sendMsg('我是租客，需要房');
