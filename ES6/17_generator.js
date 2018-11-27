function* G() {
    console.log("--- 11 begin...");
    yield 11;

    console.log("--- 22 begin...");
    yield 22;

    console.log("--- 33 begin...");
    yield 33;

    yield 110;
}

let g1 = G(); // 返回一个遍历器对象
console.log('g1.next():', g1.next()); // next() 切换到下一个状态
console.log('g1.next():', g1.next());
console.log('g1.next():', g1.next());
console.log('g1.next():', g1.next());
console.log('g1.next():', g1.next());

// ==========  与Iterator接口的关系 ========================
function* G1() {
    yield 111;
    yield 222;
    yield 333;
}

let t = {
    [Symbol.iterator]() {
        return G1();
    }
}

for (let k of t) {
    console.log('k:', k);
}

// ================ for of 遍历 G ======================================
function* G1() {
    yield 111;
    yield 222;
    yield 333;
    return 4444; // return的值不会被遍历 =================
}

for (let k of G1()) {
    console.log('k:', k);
}

// =================next方法的参数================================
function* Add() {
    let a1 = yield 11; // 运行时，从右到左。遇到yield暂停。下次时a1会被赋值。
    let a2 = yield 22;
    let a3 = yield 33;
    console.log('a1:', a1); // 3333
    console.log('a2:', a2); // 4444
    console.log('a3:', a3); // 5555
}

let g = Add();
console.log('g.next():', g.next());
console.log('g.next(3333):', g.next(3333));
console.log('g.next(4444):', g.next(4444));
console.log('g.next(5555):', g.next(5555));
console.log('g.next(6666):', g.next(6666));

// ======================Generator.prototype.throw()==================================
function* G1(){
    try {
        yield 1;
        yield 2;
        yield 3;
        return 4;
    } catch(e) {
        console.log(e);
    }
}

let k = G1();
console.log(k.next());
console.log(k.next());
k.throw(new Error("my Error")); // 错误会被catch

// ====================== Generator.prototype.return()===============================
function* G2(){
    yield "abc";
    yield 11;
    yield 22;
}
let k=G2();
console.log('k.next():', k.next());
console.log('k.return("999"):', k.return("999")); // 直接return，退出

// ====================== yield* 表达式 ========================================
function* G3(){
    yield "abc";
    yield 11;
    yield 22;
}
function* G4(){
    yield 111;
    yield 222;
    yield* G3(); // 此处相当于 对G3 做了一个for遍历。
    yield 2222;
}
for(let k of G4()){
    console.log(k);
}

// yield* 推广
function* G4(){
    yield 11111;
    yield* [1,2,3,4,5];
    yield 111111;
    yield 222222222;
}
for(let k of G4()){
    console.log(k);
}

// =============== 特征： * yield。作为对象属性的Generator函数==============================
let m = {
    *G5(){
        yield* [1,2,3,4]
    }
}
for(let k of m.G5()){
    console.log('k:', k);
}



