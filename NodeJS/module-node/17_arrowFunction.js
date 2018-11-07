let add = function add(a, b) {
    return a + b;
}

console.log(add(3, 4));

// 箭头函数，匿名函数的另种写法
let addArrowFun = (a, b) => a + b;
console.log(addArrowFun(5,6));

// 数组排序
var arr = [4,5,3,6,7,8,33,44,23];
arr.sort(function (a,b) {
    return a-b;
})

console.log(arr);

// 使用箭头函数
arr.sort( (a,b) => a-b );
console.log(arr);
