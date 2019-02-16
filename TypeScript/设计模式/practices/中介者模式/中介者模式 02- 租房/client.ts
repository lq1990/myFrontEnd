import { Mediator } from './Mediator';
import { HouseOwner } from './HouseOwner';
import { Tenant } from './Tenant';
/**
 * 中介者模式
 */
let mediator = new Mediator();
let houseowner = new HouseOwner("房东张三", mediator);
let tenant = new Tenant("租客李四",mediator);

mediator.setHouseOwner(houseowner);
mediator.setTenant(tenant);

tenant.contact("我是租客，要房");
houseowner.contact("我是房东，有房出租");
