import { ICriteria } from './ICriteria';
import { Person } from './Person';

export class CriteriaMale implements ICriteria {
    meetCriteria(persons: Person[]): Person[] {
        let malePersons: Person[] = [];

        for(let p of persons) {
            if(p.getGender()=="male") {
                malePersons.push(p);
            }
        }
        // console.log("malePersons: ",malePersons);
        return malePersons;
    }
}