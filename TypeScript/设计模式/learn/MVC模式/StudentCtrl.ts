import { Student } from './Student';
import { StudentView } from './StudentView';
export class StudentCtrl {
  private model: Student;
  private view: StudentView;

  constructor(model: Student, view: StudentView) {
    this.model = model;
    this.view = view;
  }

  setStudentName(name: string) {
    this.model.setName(name);
  }
  getStudentName() {
    return this.model.getName();
  }

  setStudentRollNo(rollNo: string) {
    this.model.setRollNo(rollNo);
  }
  getStudentRollNo() {
    return this.model.getRollNo();
  }

  updateView() {
    this.view.printStuDetail(this.model.getName(), this.model.getRollNo());
  }
}
