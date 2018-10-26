/*
(function () {
	document.myReady(function(){
		var txt = document.getElementById("txt");
		txt.onkeydown = function (e) {
			e = e || window.event;
			console.log("onkeydown:","keyCode:"+e.keyCode + "charCode:" + e.charCode);
		};

		// onkeypress: 区分大小写，识别字符
		txt.onkeypress = function (e) {
			e = e || window.event;
			console.log("onkeypress:","keyCode:"+e.keyCode + "charCode:" + e.charCode);
		};

		// 识别功能键，不区分大小写 （和keydown 一样）
		txt.onkeyup = function (e) {
			e = e || window.even;
			console.log("onkeyup:","keyCode:"+e.keyCode + "charCode:" + e.charCode);

		};

	});
})();


// ================智能文本框自动获得焦点案例=====================
(function () {
	document.myReady(function(){
		// 页面加载完成后执行
		// 获取所有的input标签，绑定keyup
		var box = document.getElementById("box");
		var inputList = box.getElementsByTagName("input");
		for(var i=0;i<inputList.length;i++){
			(function (j) {
				inputList[j].onkeyup = function (e) {
					if(this.value.length>=3){
						if(j<=1){
							inputList[j+1].focus();
						} else{
							// document.getElementById("wrap").getElementsByTagName("input")[j+1].focus();
							document.getElementById("btn").focus();
						}
					}	
				};
			})(i);

		};
	});
})();
*/

// ====================文本框change事件==========================
(function () {
	document.myReady(function () {
		var txtName = document.getElementById("txtName");
		txtName.onchange = function () {
			// 判断文本框长度
			if(this.value.length > 8 || this.value.length < 6) {
				alert("username 6-8");
				this.focus();
			}


		}; // end for onchange 
	}); // end for myReady
})();









