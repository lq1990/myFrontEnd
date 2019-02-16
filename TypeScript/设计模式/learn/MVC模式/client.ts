import { StudentView } from './StudentView';
import { StudentCtrl } from './StudentCtrl';
import { Student } from './Student';
/**
 * MVC模式，model，view，ctrl
 */
let model = new Student();
model.setName("anna");
model.setRollNo("1001");

let view = new StudentView();
let ctrl = new StudentCtrl(model, view);
ctrl.updateView();

// 更细模型数据
ctrl.setStudentName("John");
ctrl.updateView();
