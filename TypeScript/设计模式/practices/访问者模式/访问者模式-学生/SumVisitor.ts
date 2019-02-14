import { IVisitor } from './IVisitor';
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

    if(s instanceof Bachelor) {
        this.numOfBa++;
    }
    
    
  }

  getNumOfBa() {
      return this.numOfBa;
  }
 
}
