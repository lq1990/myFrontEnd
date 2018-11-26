// 对字符串作为 数组 进行解构赋值
let [a, b, c] = "56789";
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

// 字符串当做obj进行解构赋值
let { toString: s, 0: a, 1: b, 2: c } = "aicoder.com";
console.log('s:', s);
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

// （不常用）number类型和 boolean类型的解构赋值。他俩会先转成包装对象，再进行解构。
let { toString: s } = true;
let { toString: n } = 123;
console.log('s:', s);
console.log('n:', n);

// 函数参数的解构赋值
function add([a, b]) {
    return a + b;
};

console.log('add([4,5]):', add([4, 5]));

// 函数参数解构赋值带默认值
function add([a = 1, b = 20]) {
    return a + b;
}
console.log('add([1]):', add([1]));

// 函数参数对象解构赋值
function add({ a = 10, b = 20 }) {
    return a + b;
}

console.log('add({}):', add({ b: 4, a: 5 }));

// 给对象的解析一个默认值  ^_^
function add({a=1,b=2}={}) {
    return a+b;
}

console.log('add():', add());