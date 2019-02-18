import { ICriteria } from './ICriteria';
import { Person } from './Person';

export class CriteriaAnd implements ICriteria {
    private firstCri: ICriteria;
    private secondCri: ICriteria;

    constructor(firstCri: ICriteria, secondCri: ICriteria) {
        this.firstCri = firstCri;
        this.secondCri = secondCri;
    }

    meetCriteria(persons: import("./Person").Person[]): import("./Person").Person[] {
        let firstCriPs: Person[] = this.firstCri.meetCriteria(persons);
        let andCriPs: Person[] = this.secondCri.meetCriteria(firstCriPs);
        return andCriPs;
    }

}