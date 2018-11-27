// ============= Symbol, 新的数据类型，表示独一无二的值 ==============
// String, Number, Boolean, Object, Function, null, undefined, Symbol
let s1 = Symbol(); // 不用new
let s2 = Symbol();

console.log('s1:', s1);
console.log('s2:', s2);
console.log('s1===s2:', s1===s2);// false

// Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述。无实际意义
let s3 = Symbol('description for s3');
console.log('s3:', s3);

// 2. Symbol 不能参与运算，但可以显式转为字符串
let s4 = Symbol("sss");
console.log('s4.toString()+"===":', s4.toString()+"===");

// 3. 用处：作为属性名的 Symbol
let t ={
    name: "aicoder",
    age: 19,
    [Symbol("tt")]:110,
    [Symbol("func")](){
        console.log('abc:', abc);
    }
}

for(let k of Object.keys(t)){ // for of 拿不到Symbol，for in, Object.getOwnPropertyNames() 也拿不到。
    console.log('k:', k);
}

console.log('Object.getOwnPropertySymbols(t):', Object.getOwnPropertySymbols(t));// 唯一的方法 拿到Symbols
for(let k of Object.getOwnPropertySymbols(t)){ // 拿到 Symbol对应的value
    console.log('t[k]:', t[k]);
}

// 5. Symbol.for(), Symbol.keyfor()
let s1 = Symbol.for("k_aicoder"); //
let s2 = Symbol.for("k_aicoder");
console.log('s1===s2:', s1===s2);

console.log(Symbol.keyFor(s1)); //k_aicoder
