/**
 * 懒汉式单例类，在第一次调用时实例化自己。
 * 线程安全问题(Java)。
 * TS为单线程，不涉及到线程安全。
 */
export class Singleton {
    private constructor(){
        console.log("singleton...");
    }
    private static single: Singleton = null;

    // 静态工厂方法
    static getInstance(): Singleton {
        if(this.single==null) {
            this.single = new Singleton();
        }
        return this.single;
    }
}

let s = Singleton.getInstance();