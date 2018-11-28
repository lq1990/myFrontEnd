async function Add() {
    return 1; // 等待于 Promise.resolve(1)
}
Add().then(data => {
    console.log('data:', data);
})

// ============ await 只能出现在 async 函数中 ==============
// await 后面可以跟一个Promise实例，若不是Promise会改造成Promise。而且会暂停函数的执行，
// 直到Promise状态发生变化，再往下执行

async function readFile() {
    console.log("async begins to run...");
    let data = await new Promise((resolve, reject) => {
        console.log("await runs...");
        setTimeout(() => {
            resolve(3333); // 3秒后，3333会直接传给data
        }, 3000)
    });
    console.log('data:', data);
    return data;
}

readFile().then(lastdata => { console.log('lastdata:', lastdata); }).catch(e => console.log(e));
console.log("main");

// 遇到异常或return时，async函数中断

// ======================= async的多种形式 =======================
// 函数声明
async function add(params) {
    await 1;
}

// 函数表达式
let f = async function () { };

// 对象的方法
let f = {
    async getName() {

    }
}

// Class的方法
class User {
    async getName() {

    }
}


// 箭头函数
let f = async () => {

}

//============ 举例：依次读取两个文件，并写入到第三个 ================
const fs = require("fs");
const path = require("path");
const { join } = path;

const f1 = join(__dirname, "02_array_destructuring.js");
const f2 = join(__dirname, "03_obj_destructuring.js");
const f3 = join(__dirname, "f.js");

function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8", (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        })
    })
}

async function joinFile(f1, f2, f3) {
    let p1 = readFilePromise(f1);
    let p2 = readFilePromise(f2); // 两个文件都异步的去读。

    let data1 = await p1; // 当状态发生改变时，传给data
    let data2 = await p2;
    fs.writeFile(f3, data1 + data2, "utf8", error => {
        if (!error) {
            console.log("write finished");
        }
    })
}

joinFile(f1, f2, f3).then(data => {
    console.log("ending...");
})




