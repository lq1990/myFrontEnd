(function () {
	var data = [
		{name:"首页", url: "/index.html", id:1},
		{name:"关于", url: "/about.html", id:2},
		{name:"产品", url: "/product.html", id:3},
		{name:"案例", url: "/usercase.html", id:4},
		{name:"联系", url: "/contact.html", id:5}
	];

	// 页面加载完成后，动态加载菜单数据
	document.myReady(function () {
		// 初始化
		loadMenuData();
	});

	function loadMenuData() {
		var menu = document.getElementById("menu");
		var strArray = [];
		// 使用innerHTML拼接字符串。
		for(var i=0;i<data.length;i++){
			var str = '<li id="menu' +data[i].id+ '">';
			str += 		'<a href="'+ data[i].url+'">'+data[i].name+'</a>';
			str += 	  "</li>";

			// menu.innerHTML += str; // 每创建一个li，dom进行更新一次。效率低。
			// 改进如下。
			strArray.push(str);
		}

		menu.innerHTML = strArray.join(""); // join把数组变成字符串
	}


})();






