document.myReady(function () {
	// 当页面滚动到40px时候，固定
	var searchBox = document.getElementById("searchBox");
	window.onscroll = function () {
		var scrollH = document.documentElement.scrollTop ||
			document.body.scrollTop;
		if(scrollH>=40){
			// 让搜索的div设置上样式类: top-search-wrap-fixed
			searchBox.className="top-search-wrap top-search-wrap-fixed";
			// 标签的class属性在dom对象中className属性
		}else{
			searchBox.className = "top-search-wrap";
		}
	}
});

// 聪明：改变className的方式，调整位置。




