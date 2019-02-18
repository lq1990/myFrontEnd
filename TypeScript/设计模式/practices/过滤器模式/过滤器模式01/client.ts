import { Person } from './Person';
import { CriteriaMale } from './CriteriaMale';
import { CriteriaFemale } from './CriteriaFemale';
import { CriteriaSingle } from './CriteriaSingle';
import { CriteriaAnd } from './CriteriaAnd';
import { CriteriaOr } from './CriteriaOr';
/**
 * 过滤器模式。
 * 使用不同的标准来过滤一组对象。
 * 通过逻辑运算，以解耦的方式把它们连接起来。
 */
let ps: Person[] = [];
ps.push(new Person("anna","female","married"));
ps.push(new Person("beta","male","single"));
ps.push(new Person("delta","male","married"));
ps.push(new Person("cello","male","married"));
ps.push(new Person("gamma","female","single"));
ps.push(new Person("ela","female","single"));

// console.log("ps: \n",ps);

let male = new CriteriaMale();
console.log("male: \n",male.meetCriteria(ps));

let female = new CriteriaFemale();
console.log("female: \n",female.meetCriteria(ps));

let single = new CriteriaSingle();
console.log("single: \n",single.meetCriteria(ps));

let maleSingle = new CriteriaAnd(male, single);
console.log("maleSingle: \n",maleSingle.meetCriteria(ps));

let maleOrSingle = new CriteriaOr(male,single);
console.log("maleOrSingle: \n",maleOrSingle.meetCriteria(ps));
