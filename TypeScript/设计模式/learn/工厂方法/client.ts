import { FacA } from './FacA';
import { FacB } from './FacB';
/**
 * 为了解决【简单工厂】中违背 开闭原则的问题，
 * 使用工厂方法模式。
 * 建立 抽象工厂类
 */
let fa = new FacA();
fa.createCar();

let fb = new FacB();
fb.createCar();