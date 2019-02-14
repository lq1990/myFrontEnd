import { Context } from './Context';
import { Quick } from './Quick';
import { Shell } from './Shell';
/**
 * 策略模式：
 * 一个抽象策略类或接口，多个策略类实现。
 * 一个环境类，使用策略。
 * 
 * 符合开闭原则：有了新策略后，不改变已有的程序。
 */
let ctx = new Context(new Shell());
ctx.do();