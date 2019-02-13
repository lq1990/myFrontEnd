import { FacA } from './FacA';
import { FacB } from './FacB';
/**
 * 抽象工厂。
 * 使客户端在不必指定产品的具体情况下，创建多个产品族中的产品对象。
 */

let fa = new FacA();
fa.prodAircon();
fa.prodEngine();

let fb = new FacB();
fb.prodAircon();
fb.prodEngine();