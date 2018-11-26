// unicode码表示
let x = '\u0061';
let y = '\u0062';
let z = '\u0063';
console.log('x:', x);
console.log('y:', y);
console.log('z:', z);

// 超出 \u0000 ~ \uFFFF 范围的字符，必须用两个双字节的形式表示
let b = "\uD842\uDF87";
console.log('b:', b);

let d = "\ud840\udc32";
console.log('d:', d);

// unicode码可用{} 包裹
let e = "\u{61}";
console.log('e:', e);

// 4. js中 字符表示方法汇总
let a = "\z"; // "z"
let b = "\172";// 八进制
let c = "\x7A"; // 十六进制
let d = "\u007A"; // unicode，制表示方法
let e = "\u{7A}";
console.log('a,b,c,d,e:', a, b, c, d, e);

// 5. 字符串方法：charCodeAt(index)，获得字符的码点
var s = "𠀲";
console.log('s.charAt(0):', s.charAt(0)); // charAt 处理常见字
console.log('s.charAt(1):', s.charAt(1));
console.log('s.charCodeAt(1):', s.charCodeAt(1)); // 处理特殊字
console.log('s.charCodeAt(0):', s.charCodeAt(0));
console.log('s.length:', s.length); // 2

// 6. String.fromCodePoint(num) 通过码点返回字符
console.log('String.fromCodePoint(0x71):', String.fromCodePoint(0x71));

// 7. 遍历 特殊字的话，使用 let of ======================
for (let k of "𠀲你好") {
    console.log('k:', k);
}

// 8. includes(), startsWith(), endsWith()
let s = "123456";
console.log('s.includes(23):', s.includes(23)); // true
console.log('s.startsWith("1"):', s.startsWith("1")); // true
console.log('s.endsWith("56"):', s.endsWith("56")); // 可以以多个数结尾，true
// 以上3中方法，可穿第二个参数，表示开始搜索的位置
console.log('s.includes("23",4):', s.includes("23", 4)); // false

// 9. repeat()
let m = "aicoder.com";
console.log('m.repeat(2):', m.repeat(2));

// 10. padStart(), padEnd() 补全
let k = "12";
console.log('k.padStart(5,"ab"):', k.padStart(5, "ab"));
console.log('k.padEnd(5,"a"):', k.padEnd(5, "a"));

// 11. 模板字符串。反引号 `` 定义多行
let s1 = `<div>
<h3>hi</h3>
<p>hier</p>
</div>`;
console.log('s1:', s1);

// 模板字符串作用举例
let [a1, a2] = [9, 10];
let s2 = `<p>${a1}</p>
<p>${a2}</p>`;
console.log('s2:', s2);

// 输出表达式计算结果
let [a1, a2] = [9, 10];
let s3 = `<p>${a1 * 2}</p>
<p>${a2}</p>`;
console.log('s3:', s3);
// 模板内还可以加 函数
function add(a, b) {
    return a + b;
}
let [a1, a2] = [9, 10];
let s3 = `<p>${a1 * add(a1,a2)}</p>
<p>${a2}</p>`;
console.log('s3:', s3);

// 模板字符串嵌套
let t = `<ul>
${[1,2,3, 4,5].map((item)=>{
    return `<li>${item}</li>`;
}).join('')}
</ul>`;
console.log('t:', t);

// 标签模板
let [a1,a2]=["*","%"];
function add() {
    console.log('arguments:', arguments);
}
add`a${a1}-${a2}==`;
