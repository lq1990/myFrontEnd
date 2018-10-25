// =========window onload事件==============
var btn = document.getElementById("btn");
btn.onclick = function () {
	console.log("ok");
	alert("1");
};

window.unbeforeunload = function(){
	return "really?";
};






