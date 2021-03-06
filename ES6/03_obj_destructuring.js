// 对象可以解构赋值，但变量必须与属性同名，才能取到正确的值。
let { a, b } = { a: 1, b: 2 };
console.log('a:', a);
console.log('b:', b);

// 对象的解构赋值与顺序没关系
let { b, a } = { a: 1, b: 2 };
console.log('a:', a);
console.log('b:', b);

// 解构赋值的默认值是unde
let { a, b, c } = { a: 1, b: 2 };
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

// 变量名与属性名不一致
let { a: ax, b: bx } = { a: 1, b: 2 }; // a、b的名字被更换了。相当于ax、bx通过a、b将值连接了。
console.log('ax:', ax);
console.log('bx:', bx);

// 嵌套结构的解构
let { a: { x: ax, y: ay } } = { a: { x: 1, y: 2 }, b: {} };
console.log('ax:', ax);
console.log('ay:', ay);

// 指定默认值
let { a = 0, b = 10 } = { a: 1 };
console.log('a:', a);
console.log('b:', b);

// null与unde不同
let { x = 0, y = 1 } = { x: null, y: 11 };
console.log('x:', x); // null
console.log('y:', y);

// ============ 解构现有对象的方法 =============== ^_^
let { max, min } = Math;
console.log('max(1,2,3,6):', max(1, 2, 3, 6));

// 对数组进行对象属性的解构，数组也是特殊的对象
let arr = [11, 22, 33];
let { 0: a, 1: b, 2: c, 3: d } = arr; // 对idx操作
console.log('a:', a); // 11
console.log('b:', b); // 22
console.log('c:', c); // 33
console.log('d:', d); // unde