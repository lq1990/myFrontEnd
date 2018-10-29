(function () {
	document.myReady(function () {
		// 给4个按钮绑定事件
		var box = document.getElementById("box");
		EventUtil.addEvent(box,"click",function (e) {
			var target = EventUtil.getTarget(e); // 拿到事件源对象

			if(target === this){
				// 当点击的是自己的时候
				return;
			} 
			var dir = target.getAttribute("dir");
			// console.log(dir);
			var l = document.getElementById("l");
			var r = document.getElementById("r");
			switch(dir) {
				case "add":
					add(false,l,r); // false:加一个，从左向右添加
					break;
				case "addAll":
					add(true,l,r); // true：加所有，从l到r。
					break;
				case "del":
					add(false,r,l);
					break;
				case "delAll":
					add(true,r,l);
					break;
			}
		});

		function add(isAll, sel1, sel2) {
			// 从sel1 的option 移动到 sel2
			// 先把所有的需要移动到sel2里面的option放到arr
			var tempArray = []; // 移动的选项数组
			for(var i=0;i<sel1.options.length;i++) {
				if(isAll || sel1.options[i].selected) {
					tempArray.push(sel1.options[i]);
				} 
			}

			// final step
			while(tempArray.length>0){
				var opt = tempArray.pop();
				sel1.remove(opt.index);
				sel2.add(opt,null);
			}


		}

	});	
})();






