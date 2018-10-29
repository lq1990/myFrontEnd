window.onload=function () {
	var txt1 = document.getElementById("txt1");
	txt1.onfocus = function(){
		console.log("txt1 get focus");
	};

	txt1.onblur  = function(){
		console.log("txt1 lose focus");
	};

	var btnFocus2 = document.getElementById("btnFocus2");
	btnFocus2.onclick = function () {
		// 通过js代码实现某某获得焦点。
		document.getElementById("txt2").focus();
	}

	var txt2 = document.getElementById("txt2");
	txt2.onblur = function(){
		// 判断文本2的value是否为空
		if(!txt2.value){
			// 若txt2为空，txt2继续获得焦点。
			txt2.focus();
			// 并且设置框 红
			txt2.style.borderColor = "red";
		} else {
			txt2.style.borderColor = "";
		}
	};


}










