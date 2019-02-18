import { Person } from './Person';
import { ICriteria } from './ICriteria';
import { CriteriaMale } from './CriteriaMale';
import { CriteriaFeMale } from './CriteriaFemale';
import { CriteralSingle } from './CriteriaSingle';
import { AndCriteria } from './AndCriteria';
import { OrCriteria } from './OrCriteria';
/**
 * 过滤器模式。
 * 使用不同的标准来过滤一组对象，
 * 通过逻辑运算以解耦的方式把它们连接起来。
 */
let persons: Person[] = [];

persons.push(new Person("Robert","male","single"));
persons.push(new Person("John","male","married"));
persons.push(new Person("Laura","female","married"));
persons.push(new Person("Diana","female","single"));
persons.push(new Person("Mike","male","single"));
persons.push(new Person("Bobby","male","single"));

let male: ICriteria = new CriteriaMale();
let female: ICriteria = new CriteriaFeMale();
let single: ICriteria = new CriteralSingle();
let singleMale: ICriteria = new AndCriteria(single, male);
let maleFemale: ICriteria = new AndCriteria(female, male);
let singleOrFemale: ICriteria = new OrCriteria(single, female);


console.log("male: \n",male.meetCriteria(persons));
console.log("female: \n",female.meetCriteria(persons));
console.log("single: \n",single.meetCriteria(persons));
console.log("singleMale: \n", singleMale.meetCriteria(persons));
console.log("maleFemale: \n", maleFemale.meetCriteria(persons)); // nothing
console.log("singleOrFemale: \n ",singleOrFemale.meetCriteria(persons));


