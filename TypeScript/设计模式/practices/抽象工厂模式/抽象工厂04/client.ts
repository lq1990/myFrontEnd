import { FacA } from './FacA';
import { FacB } from './FacB';
import { FacC } from './FacC';
/**
 * 抽象工厂：
 * 多个抽象产品类，一个抽象工厂类，
 * 多个具体工厂，每个工厂都生产多个产品。
 */
let fa = new FacA();
fa.prodCar();
fa.prodTire();

let fb = new FacB();
fb.prodCar();
fb.prodTire();

let fc = new FacC();
fc.prodCar();
fc.prodTire();