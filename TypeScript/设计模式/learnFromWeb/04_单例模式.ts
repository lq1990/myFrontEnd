/**
 * 特点：在程序的生命周期内只有一个全局的实例，不能再new出新的实例。
 * 用处：在一些只需要一个对象存在的情况下，用单例，不如Cache，ThreadPool
 * 
 * 实现方式: 设置全局只读的 Instance，并把构造函数设为 private
 */

class myCache {
    public static readonly Instance: myCache = new myCache();

    private _items: {[key: string]: string} = {};

    private myCache() {

    }

    set(key: string, value: string) {
        this._items[key] = value;
        console.log(`set cache with key: '${key}', value: '${value}'`);
    }

    get(key:string):string {
        let value = this._items[key];
        console.log(`get cache value: '${value}' with key: '${key}'`);
        return value;
    }
}

myCache.Instance.set("name","brook");
myCache.Instance.get("name");