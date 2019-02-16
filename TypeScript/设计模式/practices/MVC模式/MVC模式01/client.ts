import { StudentModel } from './StudentModel';
import { View } from './View';
import { Ctrl } from './Ctrl';
/**
 * MVC模式
 */
let model = new StudentModel();
model.setName("beta");
model.setNr("1001");

let view = new View();
let ctrl = new Ctrl(model, view);

ctrl.updateView();

// 更新数据
ctrl.setStuName("alpha");
ctrl.updateView();