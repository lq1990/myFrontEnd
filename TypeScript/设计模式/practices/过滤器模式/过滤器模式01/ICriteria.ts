import { Person } from './Person';

export interface ICriteria {
    meetCriteria(persons: Person[]): Person[];
}