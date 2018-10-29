/*
var list = document.getElementById("list");
var li3 = document.getElementById("li3");
*/

// ===================节点操作案例=============
// 一个数组放着菜单信息，请将按钮的菜单信息动态生成为li标签
// 添加到ul#menud的列表中
(function () {
	// json数据：从后台通过ajax获取
	var data = [
		{name:"首页", url: "/index.html", id:1},
		{name:"关于", url: "/about.html", id:2},
		{name:"产品", url: "/product.html", id:3},
		{name:"案例", url: "/usercase.html", id:4},
		{name:"联系", url: "/contact.html", id:5}
	];

	// 页面加载完成后，动态加载li标签数据
	document.myReady(function () {
		// 动态创建li标签
		loadMenu(); // 初始化菜单数据


		// 初始化事件绑定


		// 提前做 数据处理


	});

	// 加载菜单数据
	function loadMenu() {
		var menu = document.getElementById("menu");
		// 动态创建li
		// {name:"首页", url: "/index.html", id:1} =>
		// <li id="menu1"><a href="/index.html">首页</a></li>

		for(var i=0;i<data.length;i++){
			var liElement = document.createElement("li");
			// 给li设置爱属性
			// 方式1
			liElement.setAttribute("id","menu"+data[i].id);
			// 方式2
			// var liIdAttrNode = document.createAttribute("id");
			// liIdAttrNode.nodeValue = "menu"+data[i].id;
			// liElement.setAttributeNode(liIdAttrNode);

			// 创建a标签节点
			var menuLinkElement = document.createElement("a");
			menuLinkElement.setAttribute("href",data[i].url);

			if(menuLinkElement.textContent){
				menuLinkElement.textContent = data[i].name;
			} else{
				menuLinkElement.innerText = data[i].name; // ie678
			}

			liElement.appendChild(menuLinkElement);
			menu.appendChild(liElement);
			// 以上方法可行，但dom操作太多，效率低。
			// =============================================
			// 优化：动态创建
			

			
		};

	};



})();


