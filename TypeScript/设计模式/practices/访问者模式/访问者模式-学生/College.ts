import { AStudent } from './AStudent';
export class College extends AStudent {
    accept(v: import("./IVisitor").IVisitor) {
        v.visit(this);
    }
}