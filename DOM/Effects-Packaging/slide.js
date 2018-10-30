(function () {
	window.onload = function () {
		var btnSlideUp = document.getElementById("btnSlideUp");
		var btnSlideDown = document.getElementById("btnSlideDown");
		var box = document.getElementById("box");

		btnSlideDown.onclick = function () {
			slideDown(box,300);
			// var start = Date.now();
			// box.style.display = "block";
			// var originH = box.clientHeight;
			// box.style.height = "0px";

			// var timer = setInterval(function () {
			// 	var now = Date.now();
			// 	box.style.height=(now - start)/500* originH+"px";
			// 	if(now-start >=500 ) {
			// 		box.style.height = originH+"px";
			// 		clearInterval(timer);

			// 	}

			// },1000/60);

		};

		btnSlideUp.onclick = function () {
			var start = Date.now();
			var originH = box.clientHeight;

			var timer = setInterval(function () {
				var now=Date.now();
				var nowH = (now-start)*originH/1000;
				box.style.height = (originH-nowH)+"px";
				if(originH <= nowH) {
					box.style.height = originH+"px";
					box.style.display = "none";
					clearInterval(timer);
				}

			},1000/60);
		};

	};
})();


// Packaging

/**
* @description - slideDown
* @param {HTMLElement} element - the tag whick is animated.
* @param {number} duration - duratino of animation
* @return {undefined}
**/
function slideDown(element, duration) {
	var start = Date.now();
	element.style.display = "block";
	var originH = element.clientHeight;
	element.style.height = "0px";

	var timer = setInterval(function () {
		var now = Date.now();
		element.style.height = (now-start)/duration * originH +"px";
		if(now-start >= duration) {
			element.style.height = originH +"px";
			clearInterval(timer);
		}

	},1000/60);

}

// slideDown()

