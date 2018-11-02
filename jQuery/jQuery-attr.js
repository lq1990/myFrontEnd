$(function () {

    // 读
    console.log( $(".txt").attr("tmd"));
   
   //    写
    $(".txt").attr("tmd","abcd");
    console.log( $(".txt").attr("tmd"));
    
    // 获取attr
    console.log($("#ckb").attr("checked"));

    // 设置attr，多个设置。用键值
    $("p").attr({
         mk:"123",
        "md":"234"
    });

    // jQ的回调函数
    $("p").attr("tmd",function (index, oldAttr) {
        return oldAttr + index; // 隐式迭代

    });
    console.log($("p")); // 包装对象，本身是个数组

    // 设置单个属性值 设置方法
    $("#ckb").attr("checked","checked");
    $("#ckb").removeAttr("checked");
    $("#ckb").attr("checked","checked"); // 有bug

    // ============= prop ====================
    $("#ckb").prop("checked",true);
    $("#ckb").prop("checked",false);
    $("#ckb").prop("checked",true);
    


});