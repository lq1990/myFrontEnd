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

/*
setInterval(function(){
	var arr = document.title.split("");
	var firstch = arr.shift();
	arr.push(firstch);
	document.title=arr.join("");
},800);

// =========== 数组实现跑马灯 ============
var intervalID = setInterval(function(){
	var oldtitle = document.title;
	var lastch = oldtitle.slice(oldtitle.length-1);
	var beforech = oldtitle.slice(0,oldtitle.length-1);
	document.title = lastch+beforech;

},1000);

setTimeout(function(){
	clearInterval(intervalID);
},3000);

// ================= getElementById 返回element========================

// 根据id值，获取标签
var elemP = document.getElementById("p2");
console.log(elemP);

var d1 = document.getElementById("d1");
// console.log(d1);
console.log(d1.attributes);

d1.attributes.item(0);
d1.innerHTML;
d1.getAttribute("id");
d1.setAttribute("class","ccc");


// ========== getElementsByTagName 返回HTMLCollection======================

var arr = document.getElementsByTagName("p");
// arr: 伪数组，HTMLCollection.
console.dir(arr);
for(var i=0;i<arr.length;i++) {
	console.log(arr[i].innerHTML);
}


// ===============HTMLCollection
var all = document.getElementsByTagName("*");
for(var i=0;i<all.length;i++){
	console.log(all[i]);
}

// ============= querySelector 返回element ============

var elem1 = document.querySelector(".c1");
console.dir(elem1);
var p = document.querySelector(".tm");
console.dir(p);
var h = document.querySelector("#tmd");
console.dir(h);

// ============== querySelectorAll 返回NodeList(伪数组) =====================
var arr = document.querySelectorAll("p.tm");
console.log(arr);
var b = Array.prototype.slice.call(arr);
console.log(b);

// ============ 事件 ===============
var d = document.querySelector("#tm");
d.onclick=function(){
	// 在事件响应方法中，this指向当前事件源对象。
	alert(this.innerHTML); // this指向当前事件源对象。
}; // 缺点：只能绑定一个方法。
// 三要素：div对象，onclick，行为：匿名函数。
// d.onclick = function(){alert("abc");}


// ===给所有的li标签绑定点击事件，并弹出li标签的内容=====================

var liNodeList = document.querySelectorAll("#citylist li");
// liNodeList.forEach(function(elem, index){
// 	elem.onclick=function () {
// 		alert(this.innerHTML);
// 	};
// 	// li标签的时间响应方法都是一样的，
// 	// 没有必要每循环一次都创建一个时间响应函数的对象。
// });

liNodeList.forEach(function(elem, idx){
	elem.onclick = liOnClickHandler;
	// 减少内存消耗
});

// li标签点击时触发执行的事件响应方法
function liOnClickHandler(){
	alert(this.innerHTML);
}

// ==========DOM事件流： 事件冒泡和捕获=================0
// 点击子元素标签的时候，父元素的绑定的点击事件也会被执行。原因：事件冒泡。
var parentdiv = document.querySelector(".parent");
parentdiv.onclick = function(){
	alert("click parent div");
};

window.onclick = function (){
	alert("click window");
};


// ===========添加事件的第二种方式： addEventListener==========
var btn = document.querySelector("#btn");

// type 1, DOM0方式：
// 缺点：
// 不能绑定多个事件处理程序
// 只能在冒泡阶段执行事件响应程序
btn.onclick=function(){

};

// type 2, DOM2, 三个参数：type,方法，是否在捕获阶段执行
// 可绑定多个事件处理
btn.addEventListener("click",function(){
 alert("click 1");
},false);

btn.addEventListener("click",function(){
	alert("click 2");
});

// 在捕获阶段执行响应程序
// var parentdiv = document.querySelector(".parent");
// var childdiv = document.querySelector(".child");

// parentdiv.addEventListener("click",function(){
// 	alert("father");
// },true);
// childdiv.addEventListener("click",function(){
// 	alert("child");
// },true);

// 在冒泡阶段执行响应程序
var parentdiv = document.querySelector(".parent");
var childdiv = document.querySelector(".child");

parentdiv.addEventListener("click",function(){
	alert("father");
});
childdiv.addEventListener("click",function(){
	alert("child");
});
 
// ======== 五角星互斥点击事件案例 ============
*/
var wjxList= document.querySelectorAll(".wjx-wrap span");
/*
wjxList.forEach(function(elem, idx){
	elem.addEventListener("click",function(){
		// 把所有的五角星设置为空心五角星
		wjxList.forEach(function(wjx,idx){
			wjx.innerHTML = "☆";

		});
		// 把自己设置为实心五角星
		elem.innerHTML = "★";
	});
});

// 循环注册事件的时候，注意内存消耗的问题。
// ==============改善版本如下===
wjxList.forEach(function(element,index){
	element.addEventListener("click",wjxClickHandler);
});


function wjxClickHandler() {
	wjxList.forEach(function(wjx,idx){
		wjx.innerHTML="☆";
	});
	// element.innerHTML = "★";

	// this 就指向绑定事件的那个元素
	this.innerHTML = "★";

}

// ===========动态添加li标签的效果==============
var btnAdd = document.querySelector("#btnAdd");
var index = 1;
// querySelector 从ie8开始支持。
btnAdd.addEventListener("click",function(){
	var list = document.querySelector(".list");
	list.innerHTML += "<li>"+ index +"</li>";
	index++;
});
*/
// ===========解除事件绑定=====================
var btnClick = document.querySelector("#btnClick");
var btnRemove = document.querySelector("#btnRemove");
// DOM0 绑定事件
btnClick.onclick = function(){
	alert("DOM0");
};

// DOM0,DOM2级解绑事件
btnRemove.addEventListener("click",function(){
	// 给btnClick DOM0级事件解绑。
	btnClick.onclick=null;

	// DOM2 级别解绑, 传参时注意：remove.一定和add.中的匹配一样。
	// btnClickHandler 不能用匿名函数。
	btnClick.removeEventListener("click",btnClickHandler);

});

// DOM2级事件绑定
btnClick.addEventListener("click",btnClickHandler);

function btnClickHandler(){
	alert("DOM2级事件绑定");
};















