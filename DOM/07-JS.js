window.onload=function () {
	var txt2 = document.getElementById("txt2");
	txt2.style.color = "#ccc";
	// 文本框2 获得焦点时，判断文本框是否等于老马，如果是，清空。
	txt2.onfocus = function () {
		if(txt2.value == "input"){
			txt2.value = "";
			txt2.style.color="#000";
		}
	};
	// 文本框2 离开焦点时，判断文本框的值是否空，空则设置回老马。
	txt2.onblur = function () {
		if(txt2.value==""){
			txt2.value = "input";
			txt2.style.color="#ccc";
		}
	}
};

