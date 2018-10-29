(function () {
	window.onload=function () {
		// 给整个文档添加一个onmousemove事件
		document.onmousemove = function (e) { // e: MouseEvent
			e = e || window.event;
			// 获取鼠标移动的位置在整个页面的坐标
			var pageX = e.clientX + (document.documentElement.scrollLeft || 
					document.body.scrollLeft);
			var pageY = e.clientY + (document.documentElement.scrollTop ||
					document.body.scrollTop);

			// 给固定定位的img设置left和top
			var imgB = document.getElementById("imgB");
			imgB.style.left = (pageX-25)+"px";
			imgB.style.top = (pageY-25)+"px";
		}
	}
})();


