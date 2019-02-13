class TestSingleton {
    name: string = null

    private constructor(){}

    private static instance: TestSingleton = null;

    static getInstance(): TestSingleton {
        if(this.instance==null) {
            this.instance = new TestSingleton();
        }

        return this.instance;
    }

    getName():string {
        return this.name;
    }
    setname(val: string) {
        this.name = val;
    }
    printInfo(){
        console.log("the name is "+this.name);
    }
}


// client
let ts1 = TestSingleton.getInstance();
ts1.setname("jason");

let ts2 = TestSingleton.getInstance(); 
// ts2创建实例时，并没有重新new一个新的。而是直接返回现有的实例，其实就是ts1实例，一样的。
ts2.setname("0539");

ts1.printInfo(); // 0539
ts2.printInfo(); // 0539
