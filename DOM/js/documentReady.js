/*
* 封装绑定文档加载完成后的时间处理程序。
* @callback function 页面加载完成后的回调函数
**/
document.myReady = function (callback){
	if(document.addEventListener){ // 标准浏览器
		document.addEventListener("DOMContentLoaded",callback,false);
	} else if(document.attachEvent){
		// 兼容ie8以及以下浏览器
		document.attachEvent("onreadystatechange",function(){
			// 当文档的状态变为：interactive表示，文档dom对象可以进行访问
			if(document.readyState=="interactive"){
				callback(window.event);
			}
		});
	} else{
		window.onload=callback;
	}
};



