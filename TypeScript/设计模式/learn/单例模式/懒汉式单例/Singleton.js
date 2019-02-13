"use strict";
exports.__esModule = true;
/**
 * 懒汉式单例类，在第一次调用时实例化自己。
 * 线程安全问题(Java)。
 * TS为单线程，不涉及到线程安全。
 */
var Singleton = /** @class */ (function () {
    function Singleton() {
        console.log("singleton...");
    }
    // 静态工厂方法
    Singleton.getInstance = function () {
        if (this.single == null) {
            this.single = new Singleton();
        }
        return this.single;
    };
    Singleton.single = null;
    return Singleton;
}());
exports.Singleton = Singleton;
var s = Singleton.getInstance();
