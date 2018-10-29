// selection-box 隐藏、显示
(function () {
	// 块级作用域
	window.onload = function () {
		var txtSearch = document.getElementById("txtSearch");
		var tipList = document.getElementById("tipList");
		var liList = tipList.getElementsByTagName("li");
		txtSearch.onfocus = function () {
			// get focus
			tipList.style.display = "block";
			// 弹出的提示框，不能影响原有内容


		};
		txtSearch.onblur=function () {
			// leave the box
			tipList.style.display="none";
		};

		// 给所有li绑定点击事件，实现li点击后，把li上的文本放到文本框上去
		for(var i=0; i<liList.length; i++){
			// liList[i].onclick = tipLiHandler;
			liList[i].onmousedown = tipLiHandler;
			// 区分onclick、onmousedown，
			// 点击事件和失去焦点事件执行顺序：1. 先执行mousedown事件，会使得被点击的元素获得焦点
			// 原来获得焦点的会失去焦点。
			// mousedown -> 原来获得焦点元素blur事件 -> 当前元素的mouseup -> click
			// 因此使用onmousedown可以把数据传到txt框，但onclick不行。
		};
		function tipLiHandler() {
			var txt = this.innerHTML;// this -> current li
			txtSearch.value = txt; // 把li标签的文本设置到文本框上
		}
	}
})();


