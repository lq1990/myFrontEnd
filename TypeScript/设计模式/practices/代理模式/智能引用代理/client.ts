import { Proxy } from './Proxy';
/**
 * 智能引用代理：
 * 当一个对象被引用时，提供一些额外操作，比如将此对象调用的次数记录下来。
 */
Proxy.numRefer = 0;
let p = new Proxy();
p.refer();
p.refer();

let p2 = new Proxy();
p2.refer();
p2.refer();
p2.refer();