import { ICriteria } from './ICriteria';
import { Person } from './Person';

export class CriteriaFeMale implements ICriteria {
    meetCriteria(persons: Person[]): Person[] {
        let femalePersons: Person[] = [];

        for(let p of persons) {
            if(p.getGender()=="female") {
                femalePersons.push(p);
            }
        }
        return femalePersons;
    }
}