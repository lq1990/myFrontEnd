import { ConcreteBuilder } from './ConcreteBuilder';
import { Director } from './Director';
/**
 * 建造者模式
 * 按照指定的蓝图建造产品，
 * 目的：通过组装零配件而产生一个新产品。
 * 
 * Product, 
 * Builder, ConcreteBuilder,
 * Director
 */
let builder = new ConcreteBuilder();

let director = new Director(builder);
let product = director.construct();

console.log(product)