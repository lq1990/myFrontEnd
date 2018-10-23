/*
// 可以获取当前文档的地址
console.log(window.document.URL);

// 获取、设置 title
console.log(document.title);
document.title="欢迎来到文刀的主页。";
console.log(document.charset);

// ======= 浏览器时钟 =======
// === setInterval(,) 设置执行间隔，无限执行===
// para1: func or str, para2: 毫秒数
var t =setInterval(function (){
	console.log(new Date());
},1000); 

// setInterval("console.log(new Date())",2000); // 不推荐
// console.log(t);


// === setTimeout(func,delay) 只执行一次=====

setTimeout(function(){
	// console.log(111);
	// 5秒后，停止上面的时钟
	console.log(t);
	clearInterval(t); // 停止间断循环执行的 setInterval
},5000);
*/
// ========== 实现跑马灯 ======
document.title="欢迎来到我的主页。";


// ==== my try ======
// var str = document.title;
// console.log(str);

// setInterval(func,100000);


// function func() {
// 	var str = document.title;
// 	var str0 = str[0];
// 	for(var i=0;i<str.length-1;i++) {
// 		str[i] = str[i+1];
// 	}
// 	str[str.length-1]=str0;
// 	console.log(str);
// 	document.title = str;
// }

// ==== 使用字符数组 ========
// 数组pop，unshift. shift,push.方法

// 将字符串转成字符数组


setInterval(function(){
	var arr = document.title.split("");
	var firstch = arr.shift();
	arr.push(firstch);
	document.title=arr.join("");
},800);






