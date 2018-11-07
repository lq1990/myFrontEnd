const EventEmitter = require("events");

class DemoEmitter extends EventEmitter {
    constructor(opt) {
        super(opt);
    }

    init() {
        console.log("init...");

        // emit：触发事件
        this.emit("init", "1234");
    }

    close() {
        console.log("close...");
        this.emit("close");
    }
}

let d = new DemoEmitter();

// on：监听事件
d.on("init", param => {
    console.log("init 事件触发，参数：", param);
});

d.once("close", () => console.log("close事件响应方法执行。。。"));

d.init(); // 内部触发了init事件

d.close(); // 执行close方法，内部触发了close事件

process.on("uncaughtException", (err) => {
    console.error("error...");
});

// d.emit("error", new Error("whoops"));