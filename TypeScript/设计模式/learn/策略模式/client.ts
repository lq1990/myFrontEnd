import { Person } from './Person';
import { Bike } from './Bike';
import { Plane } from './Plane';
/**
 * 策略模式
 * 一个系统需要动态地在几种算法中选择一种。
 */
// 不使用if else
let p = new Person(new Plane());
p.takeHoliday();