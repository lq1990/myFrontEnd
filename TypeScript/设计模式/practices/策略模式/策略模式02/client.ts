import { Person } from './Person';
import { Method1 } from './Method1';
/**
 * 策略模式：
 * 一个接口，多个策略类实现。
 * 一个环境类，使用具体的策略
 */
let p1 = new Person(new Method1());
p1.solveProblem();
