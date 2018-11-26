// 1. 数组的扩展运算符的应用 ...
console.log('ss', 1, 2, 3);
const k = ['ab', 2, 3, 4];
console.log(k);
console.log('...k:', ...k);

// 举例
let m = [1, 9, 22, -5];
console.log(Math.min(...m));

// 2. rest参数的逆应用
function sum(...arr) {
    return arr.reduce((pre, cur) => { return pre + cur });
}

console.log('sum(1,2,3,4):', sum(1, 2, 3, 4));
let m = [1, 9, 22, -5];
console.log('sum(...m):', sum(...m));

// 3. 复制数组，深度。对原数组无影响
// es5 中
let m = [1, 9, 22, -5, "ab"];
let m1 = m.slice();
let m2 = m.concat();
console.log('m1:', m1);
console.log('m2:', m2);

// es6
let m3 = [...m];
let [...m4] = m;
console.log('m3:', m3);
console.log('m4:', m4);

// 4. 合并数组
let m = [1, 9, 22, -5, "ab"];
let m1 = ["hlm", 4, 5, 9];
let m2 = ["aahlm", 4, 5, 9];
let c = m.concat(m1, m2);
console.log('c:', c);

let c1 = [...m, ...m1, ...m2, "new"];
console.log('c1:', c1);

// 5. 字符串的展开
let k = "aicoder.com";
console.log('[...k]:', [...k]);

// 6. querySelectorAll 返回值的展开
let arr = [...document.querySelectorAll('li')];

// ... 不能展开伪数组

// 7. Array.from() 转换成数组：1. 类数组对象，2.可遍历的对象
let obj = {
    "0": "a",
    "1": 2,
    "length": 2
};

let k = Array.from(obj);
console.log('k:', k);
console.log('typeof(k):', typeof (k));

// 8. 数组实例 find(), findIndex() 用于找到第一个符合条件的数组成员或idx
let k = [2, 9, 10, 222, 333];
let ret = k.find((val, index) => {
    console.log('val:', val);
    console.log('index:', index);
    return val >= 10;
});
console.log('ret:', ret);

console.log('k.findIndex(val=>val>=10):', k.findIndex(val => val >= 10));

// 9. 数组实例的fill方法使用给定值，填充一个数组
let k = new Array(10); // 长度为10
console.log('k:', k);
k.fill("a", 3, 8); // 可以设置填充的起始和结束位置
console.log('k:', k);

// 10. 数组实例的 entries(), keys(), values()

let k = [2, 7, 55, 66, 777];
for(let en of k.entries()) { // entries: k-v对
    console.log('en:', en);
}
for(let [key,val] of k.entries()) { // 可用 [key,val] 提取出k,v
    console.log('key:', key);
    console.log('val:', val);
}

// 11. includes, indexOf
let k = [2, 7, 55, 66, 777,NaN];
console.log('k.includes(7):', k.includes(7));
console.log('k.indexOf(7):', k.indexOf(7));
console.log('k.includes(NaN):', k.includes(NaN));
console.log('k.indexOf(NaN):', k.indexOf(NaN)); // indexOf 不能判断NaN。




