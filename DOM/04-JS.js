/*
// =============== onresize ====================
window.onresize = function() {
	console.log("onresize");
};

// ============= onscroll ======================
window.onscroll = function (e) {
	console.log("onscroll");
	console.log(window.pageYOffset); // 标准浏览器中支持
	console.log(window.pageXOffset);

	console.log(document.documentElement.scrollTop); // ie
	console.log(document.body.scrollTop); // 标准浏览器

	// console.log(document.documentElement.scrollTop || document.body.scrollTop);
}

// ========滚动案例: 滚动到底部，自动加载新内容============
// document.myReady(function(){
	window.onscroll=function () {
		// 拿到滚动距离
		var scrollH = document.documentElement.scrollTop ||
			document.body.scrollTop;
		// 整个网页的高度
		var pageH = document.body.clientHeight;

		// 拿到当前视口的高度
		var viewportH =document.documentElement.clientHeight;

		// 剩余bottomH高度
		var bottomH = pageH-scrollH-viewportH;
		if(bottomH < 50){
			var list = document.getElementById('list');
			var tmpstr = "";

			for(var i=0;i<10;i++){
				tmpstr += "<li>"+new Date()+"</li>";
			}
			list.innerHTML +=  tmpstr;
		}

	};
// });
*/
// var pageH = document.body.clientHeight;
// var scrollTop = document.body.scrollTop ||
// 				document.documentElement.scrollTop;
// var viewportH = document.documentElement.clientHeight;
// var bottomH = pageH - scrollTop - viewportH ;
// console.log(bottomH);




