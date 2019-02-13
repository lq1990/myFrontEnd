import { Fac } from './Fac';
/**
 * 简单工厂：
 * 只有一个具体工厂类。
 * 产品接口。
 * 
 * 问题：当增新产品时，需要修改 工厂类中的case，违反开闭原则。
 * 解决方案：用工厂方法。
 */
let fac = new Fac();
fac.prodCar("A");
fac.prodCar("B");

