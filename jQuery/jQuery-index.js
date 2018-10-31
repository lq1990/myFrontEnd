/*
//====================== DOM ====================
window.onload = function () {
    var btn = document.getElementById("btn");
    btn.onclick = function () {
        alert(this.value);
    }
};

缺点：只能绑定一次事件；onload时机太晚，我们希望等文档加载完之后就执行。
*/

window.onload = function () {
    console.log("load");
};

// jQ占用了2个全局变量，$, jQuery.  $ === jQuery.
// 页面加载完成后，自动执行。方式1
$(function () {  
    console.log("ready. $");

    var btn = document.getElementById("btn");
    btn.onclick = function () {
        alert(this.value);
    }
   

}); // $这是jQ 构造函数

// 方式2
$(document).ready(function () {
    console.log("ready. $2");

    var btn = document.getElementById("btn");
    btn.onclick = function () {
        alert(this.value+"abc");
    }
});
