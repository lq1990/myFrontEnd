import { Person } from './Person';

export interface IPersonBuilder {
    buildHead();
    buildBody();
    buildFoot();
    buildPerson(): Person;
}