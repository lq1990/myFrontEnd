// 1. 正则表达式，构造函数升级
const exp1 = /\d+/gim; // global, ignore大小写, multi-line
const exp2 = new RegExp('\d+','gim');

const exp3 = new RegExp(/\d+/gim); // es5 中，不能传第二个参数

const exp4 = new RegExp(/\d+/gi,'m'); // es6中可以传第二个参 设置flag。有了第二个参设置的flags，会覆盖掉第一个参里面的flags
console.log('exp4.flags:', exp4.flags); // m

// 2. 增加的修饰符：u修饰符，含义为unicode模式。用来处理大于 \uFFFF的unicode字符
let s = '𠮇';
console.log('/^.$/gi.test(s):', /^.$/gi.test(s));
console.log('/^.$/u.test(s):', /^.$/u.test(s));

// 3. y修饰符，粘连sticky。后一次匹配都从上一次匹配成功的下一个位置开始。
// 全局匹配
const str = "2344bb33dd89";
const exp1 = /\d{2}/gi;
let t;
while (t=exp1.exec(str)){
    console.log('t:', t);
}

// 使用粘连修饰符。从头开始进行的。
const str = "2344bb33dd89";
const exp1 = /\d{2}/y;
let t;
while (t=exp1.exec(str)){
    console.log('t:', t);
}
// 4. s修饰符。可以匹配任意的单个字符，比如换行符。
console.log(/./s.test("\n"));

// 5. 具名组匹配，es2018。允许为每一个组匹配指定一个名字。
const exp2 = /(?<num1>\d+)(?<num2>-\d+-)/; // ?<>
console.log(exp2.exec("3333-222-aaaa"));

// 支持解构赋值
let {groups: {num1,num2}} = exp2.exec("3333-222-aaa");

