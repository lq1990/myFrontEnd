/**
 * 饿汉式单例。
 * 在类创建时就已经创建好了一个静态的对象供系统使用，以后不再改变。
 * 是 线程安全的。
 */
class Singleton1 {
    private constructor(){}
    private static single: Singleton1 = new Singleton1() ;

    // 静态工厂方法
    static getInstance(): Singleton1 {
        return this.single;
    }
}