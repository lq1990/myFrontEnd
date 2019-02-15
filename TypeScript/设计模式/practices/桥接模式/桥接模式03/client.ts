import { Square } from './Square';
import { White } from './White';
import { Blue } from './Blue';
import { Circle } from './Circle';
/**
 * 桥接模式：
 * 系统有多个维度的变化，将多维度分离，单独变化。脱耦。
 */
let sq = new Square();
sq.draw(new White());
sq.draw(new Blue());

let c = new Circle();
c.draw(new Blue());