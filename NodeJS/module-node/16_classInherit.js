// ES6
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show () {
        console.log("name: %s, age: %d",this.name, this.age);
    }

}

// 用extends，表示 继承自。继承的话，也可以继承之前function类型的。
class Student extends Human{
    constructor(name, age, classNum) {
        // 子类对象的构建 需要通过父类执行构造函数的构建过程。
        super(name,age); // 调用父类的构造函数

        this.classNum = classNum; // 子类自己的
    }

    stuShow() {
        console.log("name: %s\nage: %d\nclassNum: %d",this.name,this.age,this.classNum);
    }
}

let s = new Student("new name",188, 0302);
s.stuShow();
s.show();