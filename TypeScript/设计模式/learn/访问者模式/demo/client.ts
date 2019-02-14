import { classA } from './classA';
import { classB } from './classB';
/**
 * 访问者模式
 * 
 */
let a = new classA();
a.method1();
a.method2(new classB());