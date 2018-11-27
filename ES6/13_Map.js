// Map，key-value，任何类型都可以作key
let map = new Map();
let a = {}
map.set("a", 1);
map.set("b", 2);
map.set(a, 3);

console.log('map:', map); // Map { 'a' => 1, 'b' => 2, {} => 3 }

let map = new Map([[{ a: 10 }, 2222], ["abc", "hui"]]);
console.log('map:', map);// Map { { a: 10 } => 2222, 'abc' => 'hui' }

console.log('map.keys():', map.keys());

// Map.set() 返回的是当前的Map对象，因此可用 链式写法
let map = new Map();
map.set(1,"aicoder").set("abc",678);
console.log('map:', map); // Map { 1 => 'aicoder', 'abc' => 678 }

// get(key) 返回对应的value。若无key，则返回unde
console.log(map.get(1));

// has(key) 返回布尔值
// delete(key) 成功删除返回true，删除失败返回false
// clear() 清除所有成员，无返回值

// ============== Map 的遍历方法 =========================
// keys(), values(), entries(), forEach()
let map = new Map([[1,1],[2,"coder"],["a",1],["str","hjk"]]);
console.log('map.keys():', map.keys());
console.log('map.values():', map.values());
console.log('map.entries():', map.entries());
map.forEach((item,index)=>{
    console.log('item:', item);
    console.log('index:', index);
})

// ================= WeakMap结构只接受obj作为key，弱引用 不计入垃圾回收机制=====================================

