import { ICriteria } from './ICriteria';
import { Person } from './Person';

/**
 * 交集
 */
export class AndCriteria implements ICriteria {
    private criteria: ICriteria;
    private otherCriteria: ICriteria;

    constructor(c: ICriteria, oth: ICriteria) {
        this.criteria = c;
        this.otherCriteria = oth;
    }
    
    meetCriteria(persons: import("./Person").Person[]): import("./Person").Person[] {
        let firstCriteriaPersons: Person[] = this.criteria.meetCriteria(persons);
        return this.otherCriteria.meetCriteria(firstCriteriaPersons);
    }
}