/**
 * 饿汉式单例。
 */
export class Singleton {
    private constructor(){}

    private static single: Singleton = new Singleton();

    static getInstance(){
        return this.single;
    }
}