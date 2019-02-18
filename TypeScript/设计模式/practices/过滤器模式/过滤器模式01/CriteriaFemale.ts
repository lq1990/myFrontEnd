import { ICriteria } from './ICriteria';
import { Person } from './Person';
export class CriteriaFemale implements ICriteria {
    private list: Person[];

    meetCriteria(persons: import("./Person").Person[]): import("./Person").Person[] {
        this.list = []
        for(let p of persons) {
            if(p.getGender()=="female"){
                this.list.push(p);
            }
        }

        return this.list;
    }

}