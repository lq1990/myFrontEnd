abstract class Animal { // 抽象类只能作为基类，不能被实例化
    public name: string;
    public constructor(name){
        this.name = name;
    };

    public abstract sayHi(); // 抽象方法，在子类中必须被实现
}

class Cat extends Animal {
    public constructor(name) {
        super(name);
    }
    public eat(){
        console.log("cat eats");
    }
    public sayHi(){
        console.log("cat sayhi...");
    }
}

let c: Cat = new Cat("kitty");
c.sayHi();