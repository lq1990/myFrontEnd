$(function () {
    var oddTrs = $("tr:odd");
    console.dir(oddTrs);

    // ============== DOM
    // for(var i=0;i<oddTrs.length;i++) {
    //     oddTrs[i].style.backgroundColor = "#eee";
    // }

    // =============== jQuery中提供了隐式迭代的用法
    // jQ设置dom的元素样式，提供了方法css("styleName","value");
    // 若传一个参数，代表获取。传两个代表设置
    
    oddTrs.css("backgroundColor","#aaa"); // 隐式的进行了 遍历所有的
/*
    var evenTrs = $("tr:even");
    evenTrs.css("color","#fa0");
    */
   $("tr:even").css("color","green");

   // =============== 案例：表格互斥选择 ====================
    $("tr").click(function (e) { // 存在隐式迭代
        // dom的this转成jQ
        $(this).css("backgroundColor","#fa0");
        $(this).siblings().css("backgroundColor","#fff");
    })


});













