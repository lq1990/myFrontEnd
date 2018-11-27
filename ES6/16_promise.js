// 1. promise 一个容器，存着某个未来才会结束的事件（通常是一个异步操作）的结果
// 三种状态：pending, fulfilled (resolved), rejected

// 解释：创建一个Promise，接受一个函数作为参数，该函数的两个参数：resolve,reject.
// 1秒后，若成功后执行then （状态改变pending到resolved），然后打印data（data对应resolve里面的数据123）
let p = new Promise((resolve, reject) => {
    // 处理逻辑的代码
    try {
        console.log("开始执行promise代码");
        throw new Error("myError"); // 自定义一个error，模拟用。抛出错误信息，执行catch
        setTimeout(() => {
            resolve(123); // 处理事件，任务完成后，若成功，直接调用resolve方法。123将传给then里面的data，如果顺利执行的话。
        }, 1000);
    } catch (e) {
        reject(e);
    }

});
p.then(data => { // 若不设置then，则不作为。then只在成功时执行。若失败，则then被穿透，直接执行catch
    console.log('data:', data);// resolve中的123会传到data中。
}).catch(error => console.log('--error:', error)); // 若出现异常，则e传到error

console.log("end");

// 2. Promise接受一个函数作为参数，该函数的两个参数是resolve,reject.
// 3. Promise实例p生成以后，可用then方法分别指定resolved状态和rejected状态的回调函数

const fs = require("fs");
const path = require("path");

let p2 = new Promise((resolve, reject) => {
    console.log('run Promsie initialization');

    // 读取
    let filedata = fs.readFileSync(path.join(__dirname, '15_Iterator.js'), 'utf8');
    resolve(filedata);
});
p2.then(data => {
    console.log('---data:', data);
    return { data, time: Date.now() } // return 里的data会传给下面的then中
}).then(data => { console.log(data) });

// 4. 若调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数。reject函数的参数通常是Error

// ==========  5. resolve函数的参数除了正常的值以外，还可能是另一个Promise实例。 ==============
let p1 = new Promise((resolve, reject) => {
    console.log("p1 init.");
    setTimeout(() => {
        resolve(123);
    }, 2000);
});
p1.then(data => {
    console.log("p1 then");
    console.log('data:', data);
});

let p2 = new Promise((resolve, reject) => {
    console.log("p2 init.");
    resolve(p1);
    // 如果resolve传的是一个promise实例，那么必须等待promise执行完成后，
    // then之后，才能改变当前promise的状态。
});

p2.then(data => {
    console.log('p2 then');
    console.log('data:', data);
});

// =============  6. then方法返回另一个新的Promise，所以可以进行链式编程。 ==============
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
    }, 2000);
});

p1.then(data => {
    console.log('data:', data);
    return 10; // return的数据，本质上是promise对象被resolve过，会传给后面的then。链式
}).then(data => {
    console.log('data:', data);
    return new Promise(resolve => { // return的promise会传给后面的 then
        setTimeout(() => {
            resolve(999);
        }, 1000);
    });
}).then(data => {
    console.log('data:', data);
}).catch(er => console.log(er))
    .finally(() => { }); // ES2018支持

// 7. then前一个回调函数，返回的还是一个promise对象（即有异步操作） 被resolve过
// 8. Promise.prototype.catch 方法是 .then(null,rejection)的别名。写成： p1.then().catch()
// 9. ES2018支持 finally

// 10. Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。
// 只有当所有的子Promise为resolved状态，则它为resolved
// then的参数是所有 子promise的结果组成的数组
Promise.all([Promise.resolve(1),
Promise.resolve(2), Promise.resolve(3), Promise.resolve(),
Promise.reject(new Error("myError"))])
    .then(data => {
        console.log('data:', data); // data: [ 1, 2, 3, undefined ]
    })
    .catch(error => {
        console.log('error:', error);
    })

// ============== 11. Promise.race() 谁快就输出谁。 ==========================
Promise.race([new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000)
}), Promise.reject("rej1"), Promise.resolve(110), Promise.reject(666)])
    .then(data => {
        console.log('data:', data);
    }).catch(error => {
        console.log('error:', error);
    })

// ==============  12. Promise.resolve() 现有对象转成Promise对象 ===================
// 12.1 resolve一个实例

// 12.2 参数是一个thenable对象，具有then方法的对象
Promise.resolve({
    then(resolve, reject) {
        resolve(32);
    }
}).then(data => {
    console.log('data:', data);
})

// 12.3 参数不是具有then的对象
Promise.resolve("ssss")
    .then(data => { console.log('data:', data); })