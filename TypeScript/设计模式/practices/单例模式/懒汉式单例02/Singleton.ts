/**
 * 懒汉式单例。
 */
export class Singleton {
    private constructor(){}
    private static single: Singleton = null;

    static getInstance(){
        if(this.single==null) {
            this.single = new Singleton();
        }
        return this.single;
    }
}