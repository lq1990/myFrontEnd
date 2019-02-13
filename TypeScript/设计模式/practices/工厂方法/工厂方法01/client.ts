import { FacA } from './FacA';
import { FacB } from './FacB';
import { FacC } from './FacC';
/**
 * 工厂方法：
 * 抽象工厂类，多个具体工厂类。
 * 
 * 问题：每新增一个产品，就要增加一个工厂和一个产品类。
 * 两倍的增加。
 * 
 * 解决方案：抽象工厂。
 */
let fa = new FacA();
fa.prodCar();

let fb = new FacB();
fb.prodCar();

let fc = new FacC();
fc.prodCar();

