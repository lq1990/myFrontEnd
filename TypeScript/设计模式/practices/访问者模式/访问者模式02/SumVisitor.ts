import { IVisitor } from './IVistitor';
import { Bachelor } from './Bachelor';
import { College } from './College';

export class SumVisitor implements IVisitor {
  private numOfBa: number;
  constructor() {
    this.numOfBa = 0;
  }
  visit(ba: import('./Bachelor').Bachelor);
  visit(co: import('./College').College);
  visit(s: Bachelor | College) {
    console.log("SumVisitor 来访问！");
    if (s instanceof Bachelor) {
      this.numOfBa++;
    }
  }

  getNumOfBa() {
    return this.numOfBa;
  }
}
