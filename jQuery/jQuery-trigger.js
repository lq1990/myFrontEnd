$(function () {
    // 绑定事件
    $("#btn").click(function (e,a,b) {
        console.log(e,a,b);
    }); 
    $("div").click(function (e) {
        console.log("div is clicked.");
    });

    // 触发事件
    // 第一种触发点击事件的方式
    // $("#btn").click(); 

    // 第二种触发点击事件
    // $("#btn").trigger("click",["abc","123"]);


    
    $("#btn").triggerHandler("click",[2,3]); 
    // 触发事件处理程序执行即click被执行，但并不触发事件本身，冒泡也不被执行。
  
});



