import { AMediator } from './AMediator';
import { MediatorStructor } from './MediatorStructure';
import { HouseOwner } from './HouseOwner';
import { Tenant } from './Tenant';
/**
 * 中介者模式：
 * 租房案例。
 */
let mediator: MediatorStructor = new MediatorStructor();

// 房主和租客只需要知道 中介
let houseowner: HouseOwner = new HouseOwner("房东张三", mediator);
let tenant: Tenant = new Tenant("房客李四",mediator);

// 中介要知道 房主和租客
mediator.setHouseOwner(houseowner);
mediator.setTenant(tenant);

tenant.contact("我是租房客，听说你那里有 三室房子要出租！");
houseowner.contact("我是房主，你需要出租吗？");