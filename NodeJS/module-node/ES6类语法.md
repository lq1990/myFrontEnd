ES6 类语法
====

定义一个类型
---

格式如下：


    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        show() {
            console.log(this.name, this.age);
        }
    }


创建实例：

    let s = new Student("anna",10);

