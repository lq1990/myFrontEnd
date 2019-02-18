import { AGame } from './AGame';
import { Football } from './Football';
import { Basketball } from './Basketball';
/**
 * 模板方法：
 * 封装不变的，扩展可变的。
 */
let g: AGame = new Football();
g.play();

g = new Basketball();
g.play();