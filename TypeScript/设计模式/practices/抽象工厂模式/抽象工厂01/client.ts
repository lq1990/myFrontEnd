import { FacA } from "./FacA";
import { FacB } from './FacB';

/**
 * 向client提供一个接口，使client在不必指定产品的情况下，创建多个产品族中的产品对象。
 */

let fa = new FacA();
fa.produceEngine();
fa.produceAirCon();

let fb = new FacB();
fb.produceEngine();
fb.produceAirCon();