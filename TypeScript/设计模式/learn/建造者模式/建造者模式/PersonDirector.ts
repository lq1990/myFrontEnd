import { IPersonBuilder } from './IPersonBuilder';
import { Person } from './Person';

export class PersonDirector {
    constructPerson(pb: IPersonBuilder): Person {
        pb.buildHead();
        pb.buildBody();
        pb.buildFoot();
        return pb.buildPerson();
    }
}