import { ACardPartner } from './ACardPartner';
import { PartnerA } from './PartnerA';
import { PartnerB } from './PartnerB';
/**
 * 中介者模式。
 * 打牌为例。
 * 
 * 优点：牌友依赖抽象，每个同事类耦合度降低。
 * 
 * 缺点：
 * 如果A发生变化，B必然受到影响。如果涉及的对象多的话，
 * 某一个人的变化将会影响到其它所有与之关联的人。
 * 
 * 改进：加入一个中介者，来协调各个对象之间的关联。
 */
let A: ACardPartner = new PartnerA();
A.setMoney(20);
let B: ACardPartner = new PartnerB();
B.setMoney(20);

A.changeMoney(5,B);
console.log("A的钱："+A.getMoney());
console.log("B的钱："+B.getMoney());

B.changeMoney(10,A);
console.log("A的钱："+A.getMoney());
console.log("B的钱："+B.getMoney());
