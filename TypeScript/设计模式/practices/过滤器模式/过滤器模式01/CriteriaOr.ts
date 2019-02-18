import { ICriteria } from './ICriteria';

export class CriteriaOr implements ICriteria {
  private firstCri: ICriteria;
  private secondCri: ICriteria;

  constructor(firstCri: ICriteria, secondCri: ICriteria) {
    this.firstCri = firstCri;
    this.secondCri = secondCri;
  }

  meetCriteria(
    persons: import('./Person').Person[]
  ): import('./Person').Person[] {
    let firstCriPs = this.firstCri.meetCriteria(persons);
    let secondCriPs = this.secondCri.meetCriteria(persons);

    for(let p1 of firstCriPs) {
        let temp = 0;
        secondCriPs.forEach((item2, idx) => {
            if(p1.getName()==item2.getName()) {
                temp = 1;
                return;
            }
        });
        if(temp==0) {
            // 说明p1不在 sec中，则push到sec中。
            secondCriPs.push(p1);
        }
    }
   return secondCriPs; 
  }
}
