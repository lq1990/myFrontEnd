/**
 * ts 单线程，不考虑线程安全。
 */
class Singleton1 {
    private constructor(){}

    private static single: Singleton1=null;

    static getInstance(){
        if(this.single==null){
            this.single = new Singleton1();
        }

        return this.single;
    }
}

let ins = Singleton1.getInstance();
console.log(ins);