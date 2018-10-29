// window.onload = function () {
// 	var btn = document.getElementById("btn");
// 	var dialog = document.getElementById("dialog-wrap");
// 	var closeBtn = document.getElementById("closeBtn");

// 	btn.onclick = function (e) {
// 		// console.log("click");
// 		dialog.style.display = "block";
// 	};

// 	closeBtn.onclick = function (e) {
// 		dialog.style.display = "none";
// 	};
// }

window.onload = function () {
	var btn = document.getElementById("btn");
	var dialog = L.Dialog("#mDialog"); // 如果用户没有用new，也不会报错。
	btn.onclick = function () {
		// 在 #mDialog 上进行创建一个模态对话框。
		// var dialog = new Dialog("#mDialog");
		// 可能框架有多个组件，要兼容扩展其它的组件。
		dialog.show();
	}
}
