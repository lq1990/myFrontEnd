var Singleton2 = /** @class */ (function () {
    function Singleton2() {
    }
    Singleton2.getInstance = function () {
        return this.single;
    };
    Singleton2.single = new Singleton2();
    return Singleton2;
}());
console.log(Singleton2.getInstance());
