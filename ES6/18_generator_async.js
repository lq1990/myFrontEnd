// ============= 1. 原生用nodejs 实现读取文件，写入文件 ==============
// 要求：读取两个文件的内容，并把两个文件内容写入到一个文件中
const fs = require("fs");
const { join } = require("path");
const fileName1 = join(__dirname, "02_array_destructuring.js");
const fileName2 = join(__dirname, "03_obj_destructuring.js");
const writeFileName = join(__dirname, "a.js");

fs.readFile(fileName1, "utf8", function (error, data) {
    if (error) {
        throw error;
    }

    fs.readFile(fileName2, "utf8", (error2, data2) => {
        if (error2) {
            throw error2;
        }
        let dataFileString = data + data2;
        fs.writeFile(writeFileName, dataFileString, "utf8", function (error) {
            console.log("write to file finished.")
        })
    })
})

// =================2. 使用Promise实现====================================
const fs = require("fs");
const { join } = require("path");
const fileName1 = join(__dirname, "02_array_destructuring.js");
const fileName2 = join(__dirname, "03_obj_destructuring.js");
const writeFileName = join(__dirname, "b.js");

function readFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf8", (error, data) => {
            error ? reject(error) : resolve(data);
        });
    });
}

let data;
readFilePromise(fileName1)
    .then(data1 => {
        data = data1;
        return readFilePromise(fileName2);
    })
    .then(data2 => {
        data += data2;
        return data;
    })
    .then(data => {
        fs.writeFile(writeFileName, data, "utf8", error => console.log('error:', error));
    })
    .catch(e => {
        console.log('e:', e);
    })

// =================== 3. 原生 generator 函数实现===================================
const fs = require("fs");
const { join } = require("path");
const fileName1 = join(__dirname, "02_array_destructuring.js");
const fileName2 = join(__dirname, "03_obj_destructuring.js");
const writeFileName = join(__dirname, "c.js");

let g;
function* joinFile() {
    let fileData1 = yield fs.readFile(fileName1,"utf8",(error,data)=>{ // 执行时，从右到左。到yield暂停。
        g && g.next(data); // 把data传给fileData1，并next到下一个
    });
    let fileData2 = yield fs.readFile(fileName2,"utf8",(error,data)=>{
        g && g.next(data);
    });
    fs.writeFile(writeFileName,fileData1+fileData2,"utf8", error=>{
        if(error){
            console.log('error:', error);
        } else {
            console.log("write to c.js over");
        }
    })
}

g = joinFile();
g.next();

// ======================  4. Thunk 结合 Generator ==========================
const fs = require("fs");
const { join } = require("path");
const fileName1 = join(__dirname, "02_array_destructuring.js");
const fileName2 = join(__dirname, "03_obj_destructuring.js");
const writeFileName = join(__dirname, "d.js");

function readFileThunk(fileName) {
    return function (cb) {
        return fs.readFile(fileName,"utf8",cb);
    }
}
function* joinFileThunk() {
    let data1 = yield readFileThunk(fileName1); // {value: f, done:false}
    let data2 = yield readFileThunk(fileName2);
    fs.writeFile(writeFileName,data1+data2,"utf8",error=>{
        if(error){
            console.log('error:', error);
        } else {
            console.log("write over");
        }
    })
}

let gen = joinFileThunk();
gen.next().value((error,data)=>{
    gen.next(data).value((error,data)=>{
        gen.next(data);
    })
})

// =================== Thunk 递归 ============================
const fs = require("fs");
const { join } = require("path");
const fileName1 = join(__dirname, "02_array_destructuring.js");
const fileName2 = join(__dirname, "03_obj_destructuring.js");
const writeFileName = join(__dirname, "e.js");

function readFileThunk(fileName) {
    return function (cb) {
        return fs.readFile(fileName,"utf8",cb);
    }
}

function* joinFileThunk() {
    let data1 = yield readFileThunk(fileName1); // {value: f, done:false}
    let data2 = yield readFileThunk(fileName2);
    fs.writeFile(writeFileName,data1+data2,"utf8",error=>{
        if(error){
            console.log('error:', error);
        } else {
            console.log("write over");
        }
    })
}

function run(gen){
    let g = gen();
    function nextStep(data) {
        let temp = g.next(data);
        if(!temp.done){
            temp.value(function (error,data) {
                nextStep(data);
            });
        }
    }
    nextStep();
}

run(joinFileThunk);