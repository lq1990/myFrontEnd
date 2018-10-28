// 事件委托。子元素的点击事件委托给父容器进行处理。
// list中的li标签个数是不确定的，是可能动态添加的，也可能动态减少。
(function () {
	document.myReady(function () {
		var ulList = document.getElementById("list");
		var liList = document.getElementsByTagName('li');


		// 问题： 1.动态添加的li标签，是没有绑定上事件处理程序
		// for (var i = 0; i < liList.length; i++) {
		// 	EventUtil.addEvent(liList[i],"click",function (e) {
		// 		alert(this.innerHTML);
		// 	});
		// };

		// 2. li标签很多时候，产生很多绑定事件的信息，浪费资源

		// 解决：
		// 1. 事件是有冒泡的
		// 2. 弹出事件源对象的内容。e.target || e.srcElement
		// 3. getElementsByTagName方法返回的伪数组是一个动态，会动态更新。

		// 思路：子元素的事件，委托父容器来进行注册和处理
		EventUtil.addEvent(ulList,"click",function (e) {
			// 子元素被点击的时候，会冒泡
			var target = EventUtil.getTarget(e);

			if(target == ulList) { // 点击的是父容器自己，不作为
				return;
			}
			// 若点击的是子元素，alert

			
			alert(target.innerHTML);
			// console.log(this);
			// console.log(e.target);
			// console.log(e.currentTarget);

		});

	});
})();











