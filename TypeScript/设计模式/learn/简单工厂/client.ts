import { Fac } from './Fac';
/**
 * 简单工厂。
 * 缺点：当新增车类型时，需要修改工厂类，即加case，这违背开闭原则。
 */

let fac: Fac = new Fac();
fac.createCar("A");
fac.createCar("B");