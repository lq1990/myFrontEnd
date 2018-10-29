(function () {
	document.myReady(function () {
		var msgCloseBtn = document.getElementById("msgCloseBtn");
		EventUtil.addEvent(msgCloseBtn,"click",function (e) {
			this.parentNode.style.display = "none";

		});
	});
})();

var list = document.getElementById("list");







