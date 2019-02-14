import { Person } from './Person';
import { Bike } from './Bike';
/**
 * 策略模式：
 * 避免使用 if、else
 * 一个策略类接口，多个具体策略类。
 * 一个环境类 内有私有成员 策略。
 */
let p1 = new Person(new Bike());
p1.takeAHoliday();
// 