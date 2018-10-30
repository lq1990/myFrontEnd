(function () {
	window.onload = function () {
		var btnSlideUp = document.getElementById("btnSlideUp");
		var btnSlideDown = document.getElementById("btnSlideDown");
		var box = document.getElementById("box");
		console.log(box.style.display);

		box.style.display = "block";
		var originH = box.clientHeight;
		box.style.display = "";
		

		console.log("111,",originH);

		btnSlideUp.onclick = function () {
			var deltaH =0;
			// box.style.display = "none";
			var interval = setInterval(function () {
				// var now=Date.now();
				// console.log(now-start);
				// start = now;
				// var now = Date.now();
				// var nowH = originH*((-now+start)*originH/1000);
				// console.log(nowH);
				// box.style.height = nowH +"px";
				if(box.style.height== "0px") {
					clearInterval(interval);
					box.style.display="none";
					// box.style.height = originH+"px";
					return;
				};
				box.style.display = "block";
				deltaH +=originH/20;
				box.style.height = originH-deltaH+"px";  
				console.log(box.style.height);

			},10);
			// 问题1.setInterval并不严格按照时间执行
		};

		console.log(box.style.height);
		console.log(originH);

		btnSlideDown.onclick = function () {
			var deltaH = 0;
			var interval = setInterval(function () {

				if(box.style.height.split("p")[0] >= originH){
					box.style.display = "block";
					clearInterval(interval);
					return;
				};
				box.style.display = "block";
				deltaH += originH/20;
				box.style.height = deltaH +"px";
				console.log(box.style.height);
				console.log(originH+"px");


				
			},10);

		};

	};



})();