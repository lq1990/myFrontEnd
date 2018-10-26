(function () {
	window.onload = function () {
		var pBox = document.getElementById("pBox");
		var pList = pBox.getElementsByTagName("p");

		for(var i=0;i<pList.length;i++){
			pList[i].onclick = pClickHandler;
		};

	};


	function pClickHandler(e) {
		e = e || window.event;

		// 和ctrl组合
		if(e.ctrlKey) {
			console.log("multi sel");
			this.style.backgroundColor = "#0aa";
		}else{
			var pBox = document.getElementById("pBox");
			var pList = pBox.getElementsByTagName("p");

			console.log("normal sel");
			for(var i=0;i<pList.length;i++){
				pList[i].style.backgroundColor = "#eee";
			}
			this.style.backgroundColor = "#0aa";
		}
	}
	
})();


