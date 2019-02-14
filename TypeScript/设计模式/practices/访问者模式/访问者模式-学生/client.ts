import { Bachelor } from './Bachelor';
import { College } from './College';
import { AStudent } from './AStudent';
import { ShowVisitor } from './ShowVisitor';
import { SumVisitor } from './SumVisitor';
/**
 * 访问者模式：
 * 多个访问者，有着不同的目的。
 * 被访问者：数据，学生
 */
let ba1 = new Bachelor();
let ba2 = new Bachelor();
let ba3 = new Bachelor();
let co1 = new College();

let list: AStudent[] = [];
list.push(ba1);
list.push(ba2);
list.push(ba3);
list.push(co1);

let v1 = new ShowVisitor();
let v2 = new SumVisitor();

for(let s of list) {
    s.accept(v1);
    s.accept(v2)
}
console.log(v2.getNumOfBa());