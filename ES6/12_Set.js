// ================1. Set 类型。集合的概念。成员不能重复。===================================
let s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add("1");
s.add(1);
s.add("a");
s.add("h");
console.log('s:', s);
console.log('s.size:', s.size);

// ===============2. Set函数可接受一个数组或 **可迭代对象**，用于初始化=====================================
let s = new Set([1,29,0,1,NaN,NaN]);
console.log('s:', s);

console.log('s.size:', s.size);

// ===============3. add, delete, has, clear=====================================
s.delete(1);
console.log('s:', s);
console.log('s.has(29):', s.has(29)); // true

s.clear(); // 清空
console.log('s:', s); // {}
// =================4. Set结构转成数组===================================
let s = new Set();
s.add(1);
s.add(10);
s.add(111);
console.log('s:', s);
console.log('typeof(s):', typeof(s)); // object

let a = [...s]; // 转换成数组
console.log('a:', a);

let a2 = Array.from(s); // 转换成数组
console.log('a2:', a2);
// ===================5. Set结构的实例有4个遍历方法: keys(),values(),entries(),forEach()=================================
let s = new Set([11,22,33,44]);
console.log('s:', s);
console.log('s.keys():', s.keys()); // key,value 相同
console.log('s.values():', s.values());
console.log('s.entries():', s.entries());

for(let [key,val] of s.entries()){
    console.log('key:', key);
    console.log('val:', val);
}

// forEach()
let s = new Set([11,22,33,44]);
s.forEach((item,index,map)=>{
    console.log('item:', item);
    console.log('index:', index);
})


// ====================6. WeakSet。只接受obj================================
let ws = new WeakSet();
let a = {a:12};
let b = {b:222};

ws.add(a); // 弱引用。 gc垃圾回收不会把 ws认为和a 联系一起。
ws.add(b);
console.log('ws:', ws);// WeakSet { [items unknown] }

ws.delete(a);
console.log('ws.has(b):', ws.has(b)); // true

// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================
// ====================================================