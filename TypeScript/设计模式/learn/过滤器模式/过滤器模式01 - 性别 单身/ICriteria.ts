import { Person } from './Person';

export interface ICriteria {
    meetCriteria(persons: Array<Person>): Array<Person>;
}