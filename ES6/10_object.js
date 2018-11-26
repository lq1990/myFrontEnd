// 1. 属性的简洁表示法
let name = "aicoder.com";
let phone = "123456";
let person = {
    age: 10,
    name,
    phone
}
console.log('person:', person);

// 2. 方法简写
let person = {
    age: 10,
    show: function () {
        console.log(this.age);
    }
}
person.show();

let person = {
    age: 10,
    show(a, b) {
        console.log(this.age);
        console.log('a:', a);
        console.log('b:', b);
    }
}
person.show(2, 3);

// 3. 属性名表达式
let a = "aicoder.com";
let b = "aicoder";
let person = {
    [a + 1]: "123", // 注意：此处用 []表示，
    [b]: "ai",
    show() {
        console.log([a + 1]);
        console.log(this[a + 1]); // 不是this. 而是直接加[]
        console.log('this[b]:', this[b]);
        console.log('this.aicoder:', this.aicoder);
    }
}
person.show();

// 4. 表达式可以用于定义方法名
let a = "abc";
let person = {
    [a + 1]: function () {
        console.log("jdklasöjfgklqji")
    }
}

person[a + 1]();

// 5. 对象的方法的name属性，返回函数名
console.log(person[a + 1].name);

// 6. 关于name的例外。bind方法创建的函数
let f = function () { };
let k = f.bind({});
console.log('k.name:', k.name); // bound f
// Function 构造函数创建的函数
let f = new Function();
f();
console.log('f.name:', f.name); // anonymous

// 7. Object.is() 用来比较两个值是否相等，与===略有不同
console.log('0===-0:', 0 === -0); // true
console.log('NaN===NaN:', NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false

// 8. Object.assign方法用于对象的合并。浅拷贝。
let k = Object.assign({}, { a: 1, b: 2 }, { c: 3 }, { d: 4 }, { a: 10 }); // 后面的会替代前面的，如果有重名的话。
console.log('k:', k);

// 字符串的assign
let n = Object.assign({}, "abcdef");
console.log('n:', n); // n: { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e', '5': 'f' }
// 数组的assign
let m = Object.assign({}, [11, 22, 33, 44]);
console.log('m:', m); // m: { '0': 11, '1': 22, '2': 33, '3': 44 }

// 9. 属性的定义与描述
// 属性定义：Object.defineProperties(obj, props);
// obj: 在其上定义或修改属性的对象。
let person = {};
person.age = 18;
Object.defineProperties(person, {
    name: {
        configurable: true,
        enumerable: true,
        value: "aicoder",
        writable: true
    },
    phone: {
        configurable: false,
        enumerable: false, // 不能遍历
        value: "110",
        writable: false
    },
    address: {
        get: function () {
            return this._address;
        },
        set: function (val) {
            this._address = val;
        }
    }
})
console.log('person.phone:', person.phone);
console.log('person:', person); // 此处并不会显示phone
person.address = "setAdd"; // 此处并非用set。而是直接 这样写
console.log('person.address:', person.address);

// getOwnPropertyDescriptors() 获取属性描述
// 属性的可枚举性
let p = { age: 10, name: "myname" };
Object.prototype.prop = "father porp";
for (let k in p) { // 获取key。但for in也可以拿到 父辈、原型的属性。不建议用。
    console.log('k:', k);
}

// 替代for in的方法：Object.keys() 配合 for of
let p = { age: 10, name: "myname" };
Object.prototype.prop = "father porp";
for (let k of Object.keys(p)) { // 获取key。只拿到p自身的keys
    console.log('k:', k);
}

// JSON.stringify()：只串行化对象自身的可枚举属性。
let p = { age: 10, name: "myname" };
console.log(JSON.stringify(p));
console.log(typeof(JSON.stringify(p))); // string 格式

// Object.assign()：只拷贝对象自身的可枚举属性
// 无论是否可枚举，可用getOwnPropertyNames(m) 获取m的属性

// 10. setPrototypeOf()
// 11. Object.getPrototypeOf() 读取一个obj的原型对象

// 12. Object.keys(), Object.values(), Object.entries() 配合for of
// ES2017 引入了 Object.values, Object.entries
let k = {age:10};
console.log('Object.entries(k):', Object.entries(k)); //  [ [ 'age', 10 ] ]

// 13. ES2018把...运算符引入了obj
let {a,...b} = {a:10,b:20,c:30};
console.log('a:', a); // a: 10
console.log('b:', b); // b: { b: 20, c: 30 }

// 14. 展开运算符用于 obj的浅拷贝
let k = {age:10};
let k1 = {name:"aicoder"};

let k3 = {...k,...k1};
console.log('k3:', k3); // k3: { age: 10, name: 'aicoder' }