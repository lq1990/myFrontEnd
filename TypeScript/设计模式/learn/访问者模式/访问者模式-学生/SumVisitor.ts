import { IVisitor } from './IVisitor';
import { Bachelor } from './Bachelor';
import { College } from './College';

/**
 * 为了统计bachelor学生个数
 */
export class SumVisitor implements IVisitor {
  private totalBachelor: number;

  constructor() {
    this.totalBachelor = 0;
  }

  visit(bachelor: Bachelor);
  visit(college: College);

  visit(v: Bachelor | College) {
    if (v instanceof Bachelor) {
      this.totalBachelor++;
    }
  }

  getTotalBachelor() {
    return this.totalBachelor;
  }
}
