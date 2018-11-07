/*
// 之前定义一个类
function Human(name, age) {
    this.name = name;
    this.age = age;
}
// 定义原型上的方法
Human.prototype.show = function () {
    console.log(this.name, this.age);
}
// 创建Human类型的实例
var h = new Human("haha",18);

h.show();
*/
// ==============================================
// es3-5：通过原型进行继承
// =========== es6：定义类型 和 继承的方式 =========
// 关键字：class,constructor
// 类名要符合标识符规范
class Student {
    // 定义构造函数。若构造函数没有定义，会自动添加一个默认空构造函数 constructor(){}
    constructor(name, age) {
        // 给实例添加属性
        this.name = name;
        this.age = age;
    }

    // 在类的定义的方法 都是在原型上 (本质)。但不可遍历。
    showStu() {
        console.log(this.name, this.age);
    }
}

// 创建类型的实例。通过class定义的类型，必须通过new来构造实例
let s = new Student("abc",100);
s.showStu();


// ====================== once more ========================
class School {
    constructor(number,age) {
        this.number = number;
        this.age = age;
    }


    show() {
        console.log("school:",this.number,this.age);
    }
}

let school1 = new School(999,110);
school1.show();