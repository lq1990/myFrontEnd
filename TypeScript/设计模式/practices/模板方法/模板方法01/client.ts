import { ASport } from './ASport';
import { Football } from './Football';
import { Basketball } from './Basketball';
/**
 * 模板方法：
 * 封装不变部分，扩展可变部分。
 */
let s: ASport = new Football();
s.play();

s = new Basketball();
s.play();