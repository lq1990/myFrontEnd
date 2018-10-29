(function () {
	window.onload=function (e) {
		var tabHeadList = document.getElementById("tabHeadList");
		var liMenu = tabHeadList.getElementsByTagName("li");
		for(var i=0;i<liMenu.length;i++) {
			liMenu[i].onclick = function (e) {
				// 获attribute
				var tabId = this.getAttribute("tabid");
				for(var j=0;j<liMenu.length;j++){
					liMenu[j].className = "tab-h-item";
				};
				this.className = "tab-h-item active";

				// 在body中找到与 tabId匹配的
				var tabBody = document.getElementById("tabBody");
				// 注意子节点的使用
				for(var k=0;k<tabBody.childNodes.length;k++){
					var item = tabBody.childNodes[k];
					// nodeType==1：避免有换行节点的影响
					if(item.nodeType==1){
						if(item.getAttribute("tabid")==tabId){
							item.className="tab-b-item active";
						} else{
							item.className="tab-b-item";

						}
					}
				}
			};
		}		

	};
})();
