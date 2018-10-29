
(function () {
	var data = [ // data从 ajax获取
		{name:"北京", value:1},
		{name:"上海", value:2},
		{name:"天津", value:3},
		{name:"重庆", value:4},
	];

	// 页面加载完成之后，执行匿名函数
	document.myReady(function () {
		// 初始化
		initSel(data);

		// 绑定change事件
		var sel = document.getElementById("sel");

		// 用change事件
		EventUtil.addEvent(sel,"change",function (e) {
			var selOpt = this.options[this.selectedIndex];
			console.log(selOpt);
			// console.log(selOpt.value);
			// console.log(selOpt.text);
			console.log(this.value);
		});

	});

	function initSel(data) {
		var sel = document.getElementById("sel");

		for(var i=0;i<data.length;i++) {
			var opt = document.createElement("option");
			opt.value = data[i].value;
			// opt.setAttribute("value",data[i].value);
			opt.text = data[i].name;

			sel.add(opt,null);



		};
	};




})();









