class Singleton2 {
    private constructor(){}

    private static single: Singleton2 = new Singleton2(); 
    // 饿汉式。在类创建好时，就已经创建了静态的对象，以后不再改变。

    static getInstance():Singleton2{
        return this.single;
    }
}

console.log(Singleton2.getInstance());