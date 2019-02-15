import { IVisitor } from './IVistitor';
import { Bachelor } from './Bachelor';
import { College } from './College';

export class ShowVisitor implements IVisitor {
  visit(ba: import('./Bachelor').Bachelor);
  visit(co: import('./College').College);

  visit(s: Bachelor | College) {

    if(s instanceof Bachelor) {
        console.log("ShowVisitor visits a bachelor student...");
    } else {
        console.log("ShowVisitor visits a college student...");
    }
  }
}
