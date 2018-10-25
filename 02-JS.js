// var btn = document.querySelector(".btn");

// btn.addEventListener("click",function (elem,idx) {
// 	alert("click 1");
// });

/*
// ============attachEvent====================
// IE浏览器绑定和解绑事件attachEvent
var btn = document.getElementById("btn"); // 兼容性好
var btnDetach = document.getElementById("btnDetach"); // 兼容性好

console.log(btn);

// Chrome 不支持attachEvent
// IE7,8中支持attachEvent
btn.attachEvent("onclick",k);

// 解绑
btnDetach.attachEvent("onclick",function(){
	btn.detachEvent("onclick",k);
});

function k() {
	alert("ok");
}

// =================跨浏览器兼容绑定事件===========
var btn = document.querySelector("#btn");

// 所有浏览器都兼容 DOM0的注册绑定事件方式。
// btn.onclick = function (){
// 	alert("ok");
// };

// 兼容ie和其它浏览器
if(btn.addEventListener) {
	btn.addEventListener("click",clickHandler);
} else {
	btn.attachEvent("onclick",clickHandler);
};

function clickHandler(){
	alert("Compatibility");
}

// =================事件处理程序执行顺序=====================

var btn = document.getElementById("btn");

// DOM2，可绑定多个
if(btn.addEventListener){
	btn.addEventListener("click",function(){
		alert("dom 2-1");
	});
	btn.addEventListener("click",function(){
		alert("dom 2-2");
	});btn.addEventListener("click",function(){
		alert("dom 2-3");
	});
} else {
	btn.attachEvent("onclick",function(){
		alert("dom ie-1");
	});
	btn.attachEvent("onclick",function(){
		alert("dom ie-2");
	});
	btn.attachEvent("onclick",function(){
		alert("dom ie-3");
	});
};
	
// DOM0,只能绑定一个
btn.onclick = function(){
	alert("dom 0");
}

// ================获取事件对象兼容处理==========================
var btn = document.getElementById("btn");
btn.onclick = function(e){
	// 标准浏览器中 e就是事件对象
	// ie中，window.event
	e = e? e:window.event;
	console.dir(e);
	
	if(e.target===this){}

};
*/
/*
// ===============阻止事件冒泡与默认行为======================
var btn = document.getElementById("btn");

// 阻止事件冒泡
btn.onclick = function(e){
	alert("btn");
	// 兼容ie和标准浏览器
	e = e || window.event;

	// 判断是否点击了自己
	if(e.target  === this || e.srcElement===this){
		if(e.stopPropagation){
			alert("stopPropagation");
			e.stopPropagation(); // 标准浏览器用
		} else {
			alert("cancleBubble")
			e.cancelBubble = true;// ie6-8用
			alert("cancle:false");
		}
	}

};

var pDiv=document.getElementById("pDiv");
pDiv.onclick = function(e){
	alert("pdiv");
}

// ========== myPractice
var btn = document.getElementById("btn");
btn.onclick=function(e){
	alert("onclick");
	if(e.stopPropagation){
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
	
};


var pDiv = document.getElementById("pDiv");
pDiv.onclick=function(){
	alert("parent click");
}

// ===========阻止事件捕获=====================
var pDiv = document.getElementById("pDiv");
var btn = document.getElementById("btn");

pDiv.addEventListener("click",function(e){
	alert("pdiv");
	e.stopPropagation();
},true);

btn.addEventListener("click",function(){
	alert("child btn");
},true);

// =============阻止默认行为=====================
var linkToLaoma = document.getElementById("linkToLaoma");
linkToLaoma.onclick=function(e){
	e = e || window.event; // 兼容处理事件对象
	标准浏览器
	if(e.preventDefault){
		e.preventDefault();
	} else {
		e.returnValue = false;
	}

	return false; // 配合上面使用，有用，也可阻止默认行为的效果。
};

// ============事件的返回值应用======================
// 阻止表单提交
var btnSub = document.getElementById("btnSub");
btnSub.onclick = function(e){
	e=e||window.event;
	return false; // 可以直接阻止表单的提交
};

// ============案例：实现只能输入数字的文本框================
// onkeypress
var txt = document.getElementById("txt");
txt.onkeypress=function(e){
	e = e || window.event;


	// console.log(e.keyCode);
	// 0 -> 48, 9->57

	if(e.keyCode < 48 || e.keyCode > 57 ){
		console.log(e.keyCode);
		return false;
	}
};
*/
// =============案例：页面跳转确认和表单验证案例========================

window.onbeforeunload = function(){
	return "leave this page?";
};

var btnSub = document.getElementById("btnSub");
var txtName = document.getElementById("txtName");

// DOM0级
// btnSub.onclick =function(e){
// 	// e = e|| window.event;
// 	console.log("abc");
// 	if(!txtName.value){
// 		alert("username can not be blank.")

// 		return false;
// 	}
// };// txtName.value 重点

// DOM2
if(btnSub.addEventListener){
	btnSub.addEventListener("click",btnSubClickHandler)
} else {
	btnSub.attachEvent("onclick",btnSubClickHandler);
}

function btnSubClickHandler(e){
	e = e || window.event;
	if(!txtName.value){
		alert("username is empty.");
		if(e.preventDefault){
			e.preventDefault(); // 标准浏览器阻止默认行为
		} else{
			e.returnValue = false; // IE8
		}
	}
}







