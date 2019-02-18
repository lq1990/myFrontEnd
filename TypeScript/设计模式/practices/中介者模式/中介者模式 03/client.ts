import { AMediator } from './AMediator';
import { Mediator } from './Mediator';
import { HouseOwner } from './HouseOwner';
import { Tenant } from './Tenant';
/**
 * 中介者模式：
 * 以租房为例。
 */
let m = new Mediator();

let h1: HouseOwner = new HouseOwner("anna",m);
let t1: Tenant = new Tenant("张三",m);

m.setHouseOwner(h1);
m.setTenant(t1);

h1.sendMsg("我是房东anna，我有房要出租");
t1.sendMsg("我是房客张三，我需要房子");