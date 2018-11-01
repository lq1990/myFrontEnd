/*
// ==================只执行一个==================
// $("#btn").one("click",function() {
//     console.log("click");
// });


// ===================事件委托 delegate=========================
// 子元素太多时，每个都绑定太消耗。可委托给父辈。
$(function() {
    $(".list").delegate("li","click",function(e) {
        console.log(this.innerHTML); // 传统方法
        console.log($(this).text())
    });
    
});
*/

// ========================= 大一统绑定事件 on =======================
$(function(){

    // ============= on替代bind
    $("#btn").on("click",function(e){ 
        console.log("abc");
    });

    /*
    // ============ dom动态创建元素后，也可用on直接添加事件。
    var domP = document.createElement("p");
    domP.innerHTML = "1234";
    $(domP).on("click",function(){
        console.log($(this).text());
    });

    document.body.appendChild(domP); // 将动态添加到body。
    
    // ================= jQ. on替代live=======
    var $p = $("<p>123456789</p>"); // 动态创建dom标签
    $p.on("click",function(e){  // 给动态标签绑定事件
        console.log($(this).text());
    });
    // 给页面中的body添加$p标签。
    $("body").append($p);
*/

    // ================== on替代delegate =======================
    $(".list").on("click","li",function(e) {
        console.log($(this).text());
    });


});


