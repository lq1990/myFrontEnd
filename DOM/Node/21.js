(function () {
	document.myReady(function () {
		var ckAll = document.getElementById("ckAll");
		EventUtil.addEvent(ckAll,"click",function (e) {
			// this.checked 
			var inputArr = document.querySelectorAll("#tab tbody tr td:first-child input");
			for(var i=0;i<inputArr.length;i++){
				inputArr[i].checked = this.checked;
				// this：ckAll这个对象
				// this.checked为true、false，代表选上、没选上。再把这个布尔值传给inputArr

				// console.log(this);
				// console.log(this.checked);
			}
		});
	});
})();