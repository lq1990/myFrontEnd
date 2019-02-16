import { StudentModel } from './StudentModel';
import { View } from './View';
export class Ctrl {
    private model: StudentModel;
    private view: View;

    constructor(m: StudentModel, v: View){
        this.model = m;
        this.view = v;
    }

    getStuName(){
        return this.model.getName()
    }
    setStuName(n:string){
        this.model.setName(n);
    }

    getStuNr(){
        return this.model.getNr()
    }
    setStuNr(nr: string){
        this.model.setNr(nr);
    }

    updateView(){
        this.view.printStuInfo(this.model.getName(), this.model.getNr())
    }
}