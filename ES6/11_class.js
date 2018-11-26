// 1. ==================  ES5, Class 的基本语法 =====================
function Person(name = "aicoder", age = 10) {
    this.age = age;
    this.name = name;
}

Person.prototype.show = function () {
    console.log(this.name, this.age);
}

let p1 = new Person();
p1.show();

// ES6 使用class关键字
class Person {
    show() {
        console.log(this.pName);
    }
    get pName() {
        return this._p;
    }
    set pName(val) {
        this._p = val;
    }
}

let p1 = new Person();
console.log('p1:', p1);
p1.pName = "lq";
p1.show();
console.log('typeof(Person):', typeof (Person)); // function。class的本质是function
console.log('Person.prototype.show:', Person.prototype.show); // show在原型上

// ========================2. 类上面的方法定义在 类的原型上===========================

// ========================= 3. 构造函数 constructor 方法 ========================
class Person {
    constructor(name="abc",age=19){ //可给默认值。 必须写一个constructor。若不写，默认生成一个空的构造函数
        this.age = age;
        this.name=name;
    }
    show(){
        console.log('this.age:', this.age);
        console.log('this.name:', this.name);
    }
}
let p1 = new Person("bai",1); // es6中，必须用new 来生成新对象
p1.show();

// 构造函数中，返回其它对象。不推荐
class Person {
    constructor(name,age){
        return {name,age};
    }
}
let p1 = new Person("lq",1);
console.log('p1:', p1);

// ================= 4. 严格模式 ====================================
// 类和模块的内部，默认是 严格模式，所以不必使用 use strict 指定运行模式。

// ================= 5. Class表达式 （函数表达式），不常用=====================
let Person = class {
    show(){
        console.log("123");
    }
};
let p = new Person();
console.log('typeof(Person):', typeof(Person)); // function
p.show();

// ================== 6. 类不存在变量提升 hoist========================================================
// 不能先使用 类，再声明
let p = new Person();
p.show();

class Person{
    show(){
        console.log("abcde"); // this 指向对象的实例
    }
}

// ================== 7. this 的指向。类的方法内部如果含有this，它默认指向类的实例=====================================================
class Person {
    show(){
        console.log('this:', this);
    }
}

let p1 = new Person();
p1.show(); // Persion{}

let {show}=p1;
show(); // unde.


// 使用构造函数，设置bind
class Person {
    constructor(){
        this.show = this.show.bind(this);
    }
    show(){
        console.log('this:', this);
    }
}
let p1 = new Person();
p1.show(); // Person { show: [Function: bound show] }
let {show}=p1;
show(); // Person { show: [Function: bound show] }

// =================== 8. Class的静态方法=======================
// 类型的方法若加上static关键字，表示该方法不会被实例继承，而是直接由类来调用
class Person {
    static Add(a,b) {
        return a+b;
    }
}
console.log('Person.Add(3,6):', Person.Add(3,6)); // Add直接由Person调用
// 静态属性
Person.PI = 3.14;
console.log('Person:', Person);
console.log('Person.PI:', Person.PI);

// =====================9. Class 的继承 extends===================================
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    show(){
        console.log('this.name:', this.name);
        console.log('this.age:', this.age);
    }
}

class Student extends Person {
    constructor(name,age,phone){
        super(name,age); // 继承：必须调用 super()，而且在子类的构造函数内部，this之前必须用super。
        this.phone = phone;
    }
}

let s = new Student("ai","10",123);
s.show();


// ======================10. 继承原生的构造函数=============================================
function Person(name,age) {
    this.name = name;
    this.age= age;
}

Person.prototype.show = function () {
    console.log('this.name:', this.name);
    console.log('this.age:', this.age);
}

class Student extends Person {
    constructor(name,age,phone){
        super(name,age); // 继承：必须调用 super()，而且在子类的构造函数内部，this之前必须用super。
        this.phone = phone;
    }
}

let s = new Student("ai","10",123);
s.show();



// =======================11. 继承内置的类型的构造函数============================================
class myArray extends Array {
    constructor(...args){
        super(...args);
    }
}

let m = new myArray(3,4,5); // [ 3, 4, 5 ]
console.log('m:', m);

// ===================================================================
// ===================================================================
// ===================================================================