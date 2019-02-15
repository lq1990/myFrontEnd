import { AStudent } from './AStudent';
import { Bachelor } from './Bachelor';
import { College } from './College';
import { ShowVisitor } from './ShowVisitor';
import { SumVisitor } from './SumVisitor';
import { Master } from './Master';
/**
 * 访问者模式。
 * 将数据结构，对数据的操作分离。
 */

//  创建数据
let list: AStudent[] = [];

let ba1 = new Bachelor();
let ba2 = new Bachelor();
let ba3 = new Bachelor();
let co1 = new College();
let co2 = new College();
let ma1 = new Master();

list.push(ba1);
list.push(ba2);
list.push(ba3);
list.push(co1);
list.push(co2);
list.push(ma1);

// 遍历，并使用visitor
let v1 = new ShowVisitor();
let v2 = new SumVisitor();
for(let a of list) {
    // 让每一个 数据元素接受访问
    a.accept(v1);
    a.accept(v2);
}

console.log(v2.getNumOfBa());
