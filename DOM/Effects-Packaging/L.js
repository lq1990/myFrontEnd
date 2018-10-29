(function (w) {
	var L = w.L ? w.L:{}; // 定义L框架的根
	
	// 我们占用了全局的L变量名。

	L.Dialog = function (sel) {
		// 先判断sel之前是否已经创建了
		if(L.Dialog.cache[sel]){
			return L.Dialog.cache[sel];
		}

		// 接受用户传来的选择器
		// 1. 要有一个show方法，弹出对话框。
		// 2. 关闭方法
		// 3. 动态解析用户的输入信息
		var dialogDiv = document.querySelector(sel);
		if(!dialogDiv) {
			return null;
		};
		// 拿到用户给的标题文本。
		var title = dialogDiv.getAttribute("title");

		// <div class="dialog-cover"></div>
		// <div class="dialog" id="dialog">
			// 	<div class="dialog-h">
			// 		<h3>对话框的头部</h3>
			// 		<i class="closeBtn" id="closeBtn">x</i>
			// 	</div>
			// 	<div class="dialog-b">

			// 		对话框的内容
			// 	</div>
		// </div>

		// 仿照上面的注释，进行动态添加。
		// 1. 初始化cover
		var dialogCover = document.createElement("div");
		dialogCover.className = "dialog-cover";
		dialogCover.style.display = "none";
		document.body.appendChild(dialogCover);

		var strHTML = "";
		strHTML += '<div class="dialog">';
		strHTML += 		'<div class="dialog-h">';
		strHTML += 			'<h3>' + title+ '</h3>';
		strHTML += 			'<i class="close-btn" id="close-btn">x</i>'
		strHTML += 		'</div>';
		strHTML += 		'<div class="dialog-b">';
		strHTML += 			dialogDiv.innerHTML;
		strHTML += 		'</div>';
		strHTML += '</div>';

		dialogDiv.innerHTML = strHTML;

		var dialog = {
			dialogDiv: dialogDiv, // 用户的div
			title: title, // 用户的标题
			dialogCover: dialogCover,
			show:function () {
				// 弹出层
				// 1. cover，2.显示对话框，3.给关闭按钮绑定点击事件。
				this.dialogCover.style.display = "block";
				this.dialogDiv.style.display = "block";

				var self = this;

				var btnClose = dialogDiv.querySelector(".close-btn");
				btnClose.onclick = function () {
					self.close();
				};

			},
			close:function () {
				// 关闭层
				// 1. 不显示cover，2. 不显示对话框，3. 给关闭按钮去掉绑定点击事件。
				this.dialogCover.style.display = "none";
				this.dialogDiv.style.display = "none";
				var btnClose = dialogDiv.querySelector(".close-btn");
				btnClose.onclick = null;
				
			},
		};

		L.Dialog.cache[sel] = dialog;
		console.log("dialog",dialog);
		return dialog;
	}	

	// 在函数上创建一个缓存，放sel对应的dialog
	L.Dialog.cache = {};
	w.L = L;

})(window || {});




