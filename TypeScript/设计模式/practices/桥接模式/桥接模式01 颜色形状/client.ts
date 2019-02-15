import { Circle } from './Circle';
import { White } from './White';
import { Blue } from './Blue';
import { Square } from './Square';
/**
 * 桥接模式：
 * 系统可能有多角度变化，将多角度分离出来，使其独立变化。
 */
let c = new Circle();
c.draw(new White());
c.draw(new Blue());

let s = new Square();
s.draw(new Blue());