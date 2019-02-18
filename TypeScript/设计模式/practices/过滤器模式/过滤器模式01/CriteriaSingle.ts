import { ICriteria } from './ICriteria';
import { Person } from './Person';

export class CriteriaSingle implements ICriteria {
    private list: Person[];

    meetCriteria(persons: import("./Person").Person[]): import("./Person").Person[] {
        this.list = [];
        for(let p of persons) {
            if(p.getMaritalStatus()=="single"){
                this.list.push(p);
            }
        }
        return this.list;
    }

}