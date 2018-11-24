/*
// ==============var 无块级作用域======================
{
    var a = 10;
    console.log(a); // 10
}
console.log(a); // 10
// 用 var声明的a，首先会进行变量提升。因此 大括号外的也会是10. 
// 没有块级作用域

// ===============变量提升======================
fn();
function fn() {
    console.log(b); // unde.

    var b = 11;
    console.log(b); // 11
};

// =============let 有块级作用域，无变量提升============================
{
    let a = 12;
    console.log(a); // 12
}
console.log(a); // error


{
    console.log(b); // error. 没有变量提升，暂时性死区。

    let b = "lmn";
    console.log(b);
}

// ===============var遇到的问题========================
for(var i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i);
    },4)
}

// 用闭包解决
for(var i=0;i<10;i++){
    (function (j) { // i的值传给j后，j会存到内存里
        setTimeout(()=>{
            console.log(j);
        },4)
    })(i);
}

// 用let解决。let声明的i是在 体内的，不受外界影响。
for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i);
    },4);
}

// ==============let 不能重复声明===========================
let a =10;
let a =11; // error

// ==============let 声明的变量不会添加到 全局对象上去===========================
var a =10;
console.log(window.a); // 在浏览器中执行时，a=10

let b =10;
console.log(window.b); // error

// =================const 声明后要立即赋值，后续不能修改==================
const a = 10;
a=19; // TypeError: Assignment to constant variable.

const b; // SyntaxError: Missing initializer in const declaration

// =================const 声明的变量，有暂时性死区===================
{
    console.log(a); // error
    const a = "abc";
    console.log(a);
}

// ==================const与复杂类型=======================
const stu = {}; // 指向的地址不能改，但地址里存储的内容可改。
stu.age = 19;
stu.age = 29;

console.log(stu);
*/
// ===============const声明的变量不属于 全局变量的属性===============

// ===============最小权限原则==========================
// 优先用const声明，其次let，最后var
