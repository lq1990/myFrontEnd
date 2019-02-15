import { AStudent } from './AStudent';
export class Master extends AStudent {
    accept(v: import("./IVistitor").IVisitor): void {
        console.log("master学生 不接受访问！");
    }
}