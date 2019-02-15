import { AStudent } from './AStudent';

export class Bachelor extends AStudent {
    accept(v: import("./IVistitor").IVisitor): void {
        v.visit(this);
    }
}