import { AStudent } from './AStudent';

export class College extends AStudent {
    accept(v: import("./IVistitor").IVisitor): void {
        v.visit(this);
    }
}