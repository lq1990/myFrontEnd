import { ICriteria } from './ICriteria';
import { Person } from './Person';
export class CriteralSingle implements ICriteria {
    meetCriteria(persons: import("./Person").Person[]): import("./Person").Person[] {
        let singlePersons: Person[] = [];

        for(let p of persons) {
            if(p.getMaritalStatus()=="single"){
                singlePersons.push(p);
            }
        }
        return singlePersons;
    }
}