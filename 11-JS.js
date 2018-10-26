
// 监听div的mousedown事件，开始计算鼠标移动的位移
// 通过计算鼠标垂直方式移动的位移，来设置div的top值。
// 如果div的mouseup触发，结束计算和移动。

// mousedown时候，标志为true开始移动div。
// 当mouseup时，标志位为false
// mousemove时，记录当前的位置和上一次mousemove的位置，做移动距离
// 的计算，并移动div
// =======> 核心:移动距离的计算。

(function () {
	var isMove = false; // 移动标志
	var box = document.getElementById("box");

	var tmpX=0, tmpY=0; // 鼠标移动的上一个的坐标

	box.onmousedown = function (e) {
		isMove=true;

		e = e || window.event;
		tmpX =	e.clientX + (document.documentElement.scrollLeft ||
								document.body.scrollLeft);
		tmpY =	e.clientY + (document.documentElement.scrollTop ||
								document.body.scrollTop);

	};
	box.onmouseup = function (e) {
		isMove = false;
	};

	box.onmousemove=function (e) {

		if(!isMove) {
			return;
		}

		e = e || window.event;
		// 计算当前鼠标的位置
		// 最好用pageX，pageY。不管是否滚动页面，不影响。
		var pageX =	e.clientX + (document.documentElement.scrollLeft ||
								document.body.scrollLeft);
		var pageY =	e.clientY + (document.documentElement.scrollTop ||
								document.body.scrollTop);

		// 移动距离计算
		var xH = pageX - tmpX;
		var yH = pageY - tmpY;
		console.log("xH:"+xH+" yH: "+yH);

		// js 拿不到css中设置的left和top。js只能控制标签的style属性。
		box.style.left = (parseFloat(box.style.left)+xH)+"px";
		box.style.top = (parseFloat(box.style.top)+yH)+"px";



		// 更新tmp
		tmpX = pageX;
		tmpY = pageY;

	};


})();


