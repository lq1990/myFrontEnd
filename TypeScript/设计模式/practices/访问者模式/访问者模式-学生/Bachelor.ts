import { AStudent } from './AStudent';

export class Bachelor extends AStudent {
    accept(v: import("./IVisitor").IVisitor) {
        v.visit(this);
    }
    

}