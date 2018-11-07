// ================ ES5中 =====================
/*
function Stu(name) {
    this._name = name;
};

Stu.prototype = {
    constructor: Stu,

    get Name() {
        return this._name;
    },

    set Name(val) {
        if(val) {
            this._name = val;
        }
    },
};

var s = new Stu("beta");
console.log(s.Name);

s.Name = "new name";
console.log(s.Name);

s.Name = "";
console.log(s.Name);
*/
// =================== ES6 中===========================
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    show() {
        console.log(this.name, this.age);
    };

    // 方法名；本质上是 属性名
    get Name() {
        return this.name;
    }

    set Name(val) {
        this.name = val || "KONG";
    }

    static Add(a,b) { // 静态，相当于在 构造函数上添加的方法。
        return a+b;
    }
}

let s = new Student("abcde",19);
s.show();

s.Name = "a new name.";
s.show();
s.Name = null;
s.show();

console.log(Student.Add(4,5));






