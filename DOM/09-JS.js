(function () {
	window.onload = function () {
		var box=document.querySelector(".box");


		box.onmouseup=function function_name() {
			console.log("mouse up");
		};

		// 如果鼠标不是在当前元素上up时，up和click都不会执行
		box.onclick=function () {
			console.log("click");
		};

		box.onmousedown=function () {
			console.log("mouse down");
		};

		box.onmouseenter = function () {
			console.log("enter");
		};
		box.onmouseleave = function () {
			console.log("leave");
		};

		// 在元素或者子元素上面时会触发，会冒泡。
		box.onmouseover = function () {
			console.log("over");
		};

		// 不常用。鼠标离开目标或子元素时触发此事件。
		box.onmouseout=function () {
			console.log("out");
		};

		// 鼠标在元素内部移动时重复触发此事件
		box.onmousemove=function () {
			console.log("move");
		};


	};


})();



