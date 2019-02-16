import { StudentModel } from './StudentModel';
import { View } from './View';
import { Ctrl } from './Ctrl';
/**
 * MVC模式
 */
let model = new StudentModel();
model.setName("cello");
model.setNr("001");


let view = new View();
let ctrl = new Ctrl(model, view);
ctrl.updateView();

ctrl.setStuName("lq");
ctrl.updateView();
