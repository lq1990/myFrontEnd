// oncontextmenu

(function () {
	window.onload = function () {
		// 给h1标签添加一个右键点击的事件
		var hTitle = document.getElementById("hTitle");
		var menuList = document.getElementById("menuList");

		hTitle.onmousedown =function (e) {
			e = e||window.event;

			// 鼠标右击
			if(e.button == 2 || e.button == 6){
				console.log("right click");

				menuList.style.display="block";

				// 控制弹出菜单的位置
				var pageX = e.clientX + (document.documentElement.scrollLeft ||
										document.body.scrollLeft);
				var pageY = e.clientY + (document.documentElement.scrollTop ||
										document.body.scrollTop);

				menuList.style.left = (pageX)+"px";
				menuList.style.top = (pageY)+"px";

			}
		};

		// 点击文档时，关闭右键菜单
		document.onclick = function (e) {
			menuList.style.display="none";
		}

		// 屏蔽浏览器默认的右键菜单
		document.oncontextmenu = function (e) {
			e = e || window.event;
			if(e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			return false;
		}
	};
})();




