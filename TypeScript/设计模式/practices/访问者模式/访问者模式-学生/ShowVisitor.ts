import { IVisitor } from './IVisitor';
import { Bachelor } from './Bachelor';
import { College } from './College';
export class ShowVisitor implements IVisitor {
  visit(ba: Bachelor);
  visit(co: College);

  visit(s: Bachelor | College) {
    if(s instanceof Bachelor) {
        console.log("visit a bachelor student")
    } else {
        console.log("visit a college student")
    }
  }
}
