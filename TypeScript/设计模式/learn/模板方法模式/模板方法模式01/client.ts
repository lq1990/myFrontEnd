import { Student } from './Student';
import { Teacher } from './Teacher';
/**
 * 模板方法模式
 */
let stu = new Student();
stu.preToSchool();

let tea = new Teacher();
tea.preToSchool();