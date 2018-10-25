window.onload=function () {
	var txt1 = document.getElementById("txt1");
	txt1.onfocus = function(){
		console.log("get focus");
	};

	txt1.onblur  = function(){
		console.log("lose focus");
	};

	var btnFocus2 = document.getElementById("btnFocus2");
	btnFocus2.onclick = function () {
		// 通过js代码实现某某获得焦点。
		document.getElementById("txt2").focus();
	}

}