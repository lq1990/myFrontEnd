// 对兼容问题进行的封装，方便使用

// 事件封装
(function (window) {
	// 1. 给谁绑定，2.绑定什么事件，3.绑定事件的处理程序， 4.捕获冒泡
	var EventUtil = {
		addEvent: function(element,type, handler,isCapture){
			if(element.addEventListener){
				isCapture = isCapture ? true:false;
				element.addEventListener(type,handler,isCapture);
			} else if(element.attachElement){
				element.attachElement("on"+type,function(){
					return handler.call(element,window.event);
				});
			}
		},

		// 获取事件对象 兼容处理
		getEvent:function (e) {
			return e || window.event;
		},

		// 获取事件源对象
		getTarget: function (e) {
			return e.target || e.srcElement;
		},

		// 阻止事件冒泡
		stopPropagation: function (e) {
			if(e.stopPropagation){
				e.stopPropagation();
			} else{
				e.cancelBubble = true;
			}
		},

		// 阻止默认行为
		preventDefault: function (e) {
			if(e.preventDefault){
				e.preventDefault();
			} else{
				e.returnValue = false;
			}
		},

	};

	window.EventUtil = EventUtil;
})(window || {});




