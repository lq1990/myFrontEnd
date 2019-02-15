import { White } from "./White";
import { Square } from './Square';
import { Rectangle } from './Rectangle';

/**
 * 桥接模式：
 * 系统可能有多个角度分类，每一种角度都可能变化，
 * 把多角度分离出来，让他们独立变化。脱耦。
 */
let white = new White();
let square = new Square();

square.setColor(white);
square.draw();

let rect = new Rectangle();
rect.setColor(white);
rect.draw();
