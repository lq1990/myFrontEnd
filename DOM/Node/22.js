var data = [
{
	"id":1,
	"name":"mahu",
	"content":"今天你吃苹果了吗？",
	"time":"2016-02-17 00:00:00"
},
{
	"id":2,
	"name":"haha",
	"content":"今天天气不错",
	"time":"2016-02-18 00:00:00"
},
{
	"id":3,
	"name":"abc",
	"content":"good",
	"time":"2016-02-19 00:00:00"
},
{
	"id":4,
	"name":"anben",
	"content":"perfect",
	"time":"2016-02-20 00:00:00"
},
{
	"id":5,
	"name":"mingren",
	"content":"brilliant",
	"time":"2016-02-21 00:00:00"
},
{
	"id":6,
	"name":"zuozhu",
	"content":"hey",
	"time":"2016-02-22 00:00:00"
},
{
	"id":7,
	"name":"chutian",
	"content":"smart",
	"time":"2016-02-23 00:00:00"
}
];

(function () {

	var maxZIndex = 1;
	var tipArray=[]; // 放所有的tip标签。
	var isMove = false;
	var tempX = 0, tempY = 0;
	var moveNode = null;
	window.onload = function () {
		// 页面加载后，加载数据生成tip div并添加到wall上。
		loadTipDivs(data);

		// 给所有tip绑定mousedown事件，当点击时，zIndex变最大
		for(var i=0;i<tipArray.length;i++){
			tipArray[i].onmousedown = function (e) {
				this.style.zIndex = ++maxZIndex;

				isMove = true;
				e = e || window.event;
				tempX = e.clientX + (document.documentElement.scrollLeft || 
									document.body.scrollLeft);
				tempY = e.clientY + (document.documentElement.scrollTop || 
									document.body.scrollTop);
				moveNode = this; // 把当前移动的div设置为鼠标按下的对应tip标签。

			}; 

			tipArray[i].onmouseup = function (e) {
				isMove = false;
			};

			tipArray[i].onmousemove = function (e) {
				e = e || window.event;
				var pageX = e.clientX + (document.documentElement.scrollLeft || 
									document.body.scrollLeft);
				var pageY = e.clientY+(document.documentElement.scrollTop || 
									document.body.scrollTop);

				var w=pageX - tempX;
				var h=pageY - tempY;
				if(isMove && this== moveNode){
					this.style.left = parseFloat(this.style.left)+w+'px';
					this.style.top = parseFloat(this.style.top)+h+'px';
				}
				tempX = pageX;
				tempY = pageY;


			};
		}

		// 实现移动


		// 给tip的btn绑定 close事件
		var closeBtns = document.getElementsByTagName("i");
		console.log(closeBtns);
		for(var j=0;j<closeBtns.length;j++){
			closeBtns[j].onclick = function () {
				this.parentNode.parentNode.style.display = "none";
			}
		}
		// ============== .style.display 善于使用style =====================

		// EventUtil.addEvent(closeBtns,"click",function (e) {
		// 	e = e || window.event;
		// 	console.log(e);
		// 	var target = e.target;
		// 	console.log(target);
		// });

	};

	function loadTipDivs(data){
		var strHTMLArray=[];
		for(var i=0;i<data.length;i++){
			var itemData = data[i];
			var strHTML = "";
			strHTML += '<div class="tip">';
			strHTML += 		'<div class="tip-h">';
			strHTML += 			'<div class="h-msg">第[4555'+itemData.id+']条 '+itemData.time +'</div>';
			strHTML += 			'<i class="closeBtn" id="closeBtn">x</i>';
			strHTML += 		'</div>';
			strHTML += 		'<div class="tip-c">';
			strHTML += 			itemData.content;
			strHTML += 		'</div>';
			strHTML += 		'<div class="tip-f">';
			strHTML += 			itemData.name;
			strHTML += 		'</div>';
			strHTML += '</div>';

			strHTMLArray.push(strHTML);
		}

		// 把所有的许愿div放到wall
		var wall = document.getElementById("wall");
		wall.innerHTML = strHTMLArray.join("");
	
		for(var i=0;i<wall.childNodes.length;i++) {
			
			if(wall.childNodes[i].nodeType==1) // nodeType=1: Tag
			{
				wall.childNodes[i].style.left = Math.random()*(960-198)+"px"; // left是str类型，最后勿忘加"px"
				wall.childNodes[i].style.top = Math.random()*(627-181)+"px";
				wall.childNodes[i].style.zIndex = 1;
				tipArray.push(wall.childNodes[i]);
			}
		}		
	}


})();













