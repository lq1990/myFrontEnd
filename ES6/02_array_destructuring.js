/*
let a=1,b=2,c=3;
console.log(a);
console.log(b);
console.log(c);
 传统方法 很麻烦

// ===============数组的解构赋值==========================
// 声明三个变量
let [a,b,c]=[1,2,3];
console.log(a);
console.log(b);
console.log(c);

// 复杂的解构赋值,不完全结构
let [a,[b],c]=[1,[2,22,222],3];
console.log(a);
console.log(b);
console.log(c);

let [a,[b,...d],c]=[1,[2,3,4,5],33]; // ... 展开运算符
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);
console.log('d:', d);

// 若解构不成功，变量的值等于 unde。
let [a,b]=[1];
console.log('a:', a);
console.log('b:', b); // unde.

// 越过解构
let [a,,b]=[1,,2];
console.log('a:', a);
console.log('b:', b);

// 等号的右边不是数组或str等 可迭代对象，就会报错
let [a,b]=1;
console.log('a:', a);
console.log('b:', b);
 
// 结构赋值允许指定默认值
let [a = 1, b = 2, c = 3] = [11, 22, 33];
console.log('a:', a); // 11
console.log('b:', b); // 22
console.log('c:', c); // 33

let [a = 1, b = 2, c = 3] = [undefined, 22, 33];
console.log('a:', a); // 1 若是被unde覆盖，则仍然保留默认的。
console.log('b:', b); // 22
console.log('c:', c); // 33
*/
// 默认值可以使用解构赋值的其它变量，但该变量必须已经声明。
let [a, b = a] = [1];
console.log('a:', a);
console.log('b:', b);


