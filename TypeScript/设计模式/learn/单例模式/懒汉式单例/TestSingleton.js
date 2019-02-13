var TestSingleton = /** @class */ (function () {
    function TestSingleton() {
        this.name = null;
    }
    TestSingleton.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TestSingleton();
        }
        return this.instance;
    };
    TestSingleton.prototype.getName = function () {
        return this.name;
    };
    TestSingleton.prototype.setname = function (val) {
        this.name = val;
    };
    TestSingleton.prototype.printInfo = function () {
        console.log("the name is " + this.name);
    };
    TestSingleton.instance = null;
    return TestSingleton;
}());
// client
var ts1 = TestSingleton.getInstance();
ts1.setname("jason");
var ts2 = TestSingleton.getInstance();
ts2.setname("0539");
ts1.printInfo();
ts2.printInfo();
