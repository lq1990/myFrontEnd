class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
    get name() {
        return "Jack";
    }
    set name(val) {
        console.log("setter: "+val);
    }
    static isAnimal (a) { // 静态方法，不要实例化，而是直接通过类来调用
        return a instanceof Animal;
    }
}

let a = new Animal("Jack");
console.log(Animal.isAnimal(a)); // 静态方法直接由 类 来调用，而非实例调用。

/*

let a = new Animal("name1"); // setter: name1
a.name = "name2"; // setter: name2
console.log('a.name:', a.name); // Jack

// console.log('a.sayHi():', a.sayHi());

class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        // console.log('this.name:', this.name);
    }
    sayHi(){
        return 'Meow, '+super.sayHi(); // 调用父类的方法
    }
}

// let c = new Cat("kitty");
// console.log('c.sayHi():', c.sayHi());

*/