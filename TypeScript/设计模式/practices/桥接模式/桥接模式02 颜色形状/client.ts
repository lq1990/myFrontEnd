import { Circle } from './Circle';
import { Yellow } from './Yellow';
import { White } from './White';
import { Square } from './Square';
/**
 * 桥接模式 bridge
 * 系统可能有多维度变化，将多维度 分离出来，脱耦。
 */
let circle = new Circle();
circle.draw(new Yellow());
circle.draw(new White());

let s = new Square();
s.draw(new White());