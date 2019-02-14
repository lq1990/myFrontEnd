import { AStudent } from './AStudent';
import { Bachelor } from './Bachelor';
import { College } from './College';
import { ShowVisitor } from './ShowVisitor';
import { SumVisitor } from './SumVisitor';
/**
 * 访问者模式
 * 学生（Bachelor, College）接受 拜访者的 拜访。
 * 不同的 visitor有不同的目的，也就是，不同的操作可以借助新的visitor实现，
 * 降低了操作间的耦合性。
 */
let list: AStudent[] =  [];

let ba = new Bachelor();
ba.setName("llin");
ba.setRating("100");
ba.setUni("Tianjin Uni");

let ba2 = new Bachelor();
let ba3 = new Bachelor();
ba2.setName("llinf");
ba2.setRating("100");
ba2.setUni("Tianjing Uni");

let co = new College();
co.setName("dalinge");
co.setRating("1");
co.setUni("bj Colloge");

list.push(ba);
list.push(ba2);
list.push(ba3);
list.push(co);

let v = new ShowVisitor();
let v1 = new SumVisitor();

// 遍历 list所有的学生
for(let l of list) {
    l.accept(v); // v 的目的：打印信息
    l.accept(v1); // v1 的SumVisitor为了统计 bachelor的学生个数
}

console.log(v1.getTotalBachelor());

