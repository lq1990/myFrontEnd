// 1. 增加了函数参数的默认值
function add(a, b = 2) {
    return a + b;
}

console.log('add(1):', add(1));

// 2. 参数默认值是惰性求值的。默认值在用到的时候，才会去求出具体的值。
let x = 1;
function add(a, b = x) {
    return a + b;
}
console.log('add(1):', add(1)); // 2
x++;
console.log('add(1):', add(1)); // 3

// 3. 参数默认值可以与解构赋值 结合
function add({ a, b = 1 } = {}) {
    return a + b;
}
console.log('add({a:1}):', add({ a: 1 })); // 2
console.log('add():', add()); // NaN

// 4. 尾参数定义了默认值是可以省略的，否则不能省略调用传参
function add(a, b = 1, c) {
    return a + b + c;
}
console.log(add(1, undefined, 2)); // 4
console.log(add(1,, 2)); // error

function add(a, b, c = 1) {
    return a + b + c;
}
console.log('add(1,2):', add(1, 2)); // 尾参数可以省略

// 5. 函数的length属性会失真，当定义了默认值之后
function add(a, b = 1) {
    return a + b;
}
console.log('add.length:', add.length); // 1

// 6. 设置了参数的默认值。
let x = 1;
function add(a, b = x) { // 默认参数已经初始化。会形成一个单独作用域，初始化结束后，作用域就被释放。
    let x = 10;
    console.log('b:', b); // 1
}
add(1);

// 7. es6引入rest参数（形式为 ...变量名），用于获取函数的多余参数
function add(...nums) {
    return nums.reduce((pre, cur, index) => {
        console.log('pre:', pre);
        console.log('cur:', cur);

        console.log('index:', index);
        return pre + cur;
    })
}
console.log(add(2, 3, 4, 5));

// 8. 函数的严格模式的改变
// 9. 函数的name属性，返回改函数的函数名
function add(a, b) {
    return a + b;
}
console.log('add.name:', add.name);

// 10. 箭头函数
// 箭头函数注意：
// 1. 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// 2. 不可以当作构造函数，不能用new
// 3. 不能用arguments对象
// 4. 不能用yield命令。
const fun1 = function (a, b) {
    return a + b;
}
const fun2 = (a, b) => { return a + b };
// const fun2 = (a, b) => a + b;
console.log('fun1(1,2):', fun1(1, 2));
console.log('fun2(1,2):', fun2(1, 2));

const f2 = a => void console.log(a); // 若不需要返回值，可用void

// 11. 尾调用、 尾函数。不会形成堆栈调用
function b() { };
function add() {
    return b(); // 尾函数
};
function add() {
    return b() + 1; // 不是尾函数
};

// 12. 递归
function sum(num) {
    if (num > 1) {
        return sum(num - 1) + num;
    } else {
        return 1;
    }
}

console.log(sum(100000)); // RangeError: Maximum call stack size exceededror

// 13. 递归的优化 -> 尾递归的优化，尾调用 -> for循环
function sum1(num, total=0) {
    if (num > 0) {
        return sum1(num - 1, total + num);
    } else {
        return total;
    }
}
console.log(sum1(100000));  // RangeError: Maximum call stack size exceeded . ???
